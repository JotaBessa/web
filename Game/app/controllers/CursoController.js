const curso = require("../models/curso");
const models = require("../models/index");
const Curso = models.Curso;
const Area = models.Area;
const index = async (req, res) => {
    let cursos = await Curso.findAll({include: Area});
    let allCursos = cursos.map(curso => curso.toJSON());
    console.log(allCursos)
    res.render('curso/index', {
        cursos: allCursos,
    });
}
const read = async (req, res) => {
    let curso = await Curso.findByPk(req.params.id, { include: Area });
    res.render('curso/read', {
        curso: curso.toJSON()
    });
}
const create = async (req, res) => {
        let areas = await Area.findAll();
    if (req.route.methods.get) {
        res.render('curso/create', {
            areas: areas.map((area) => area.toJSON())
        });
    } else {
        const {sigla, nome, descricao, areaId} = req.body;
        try {
            curso = await Curso.create({
                sigla: sigla,
                nome: nome,
                descricao: descricao,
                areaId: parseInt(areaId),
            });
            res.redirect('curso');
        } catch(e) {
            console.log(req.body);
            res.render('curso/create', {
                curso: req.body,
                errors: e.errors,
                areas: areas.map((area) => area.toJSON())
            })
        }
    }
}
const update = async (req, res) => {}
const remove = async (req, res) => {}
module.exports = { index, read, create, update, remove }
