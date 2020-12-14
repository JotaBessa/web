const arr = require('../models/area');
const models = require('../models/index');
let Area = models.Area;
const sobre = (req, res) => {
    res.render('sobre');
}
const index = async (req, res) => {
    res.render('index', {

    });
}
const game = (req, res) => {
    res.render('game', {
        titulo: "Vigilantes da floresta"
    });
}
const areas = async (req, res) => {
    const areasCiencia = await Area.findAll();
    res.render('areas', {
        areas: areasCiencia.map((arr) => arr.toJSON()),
    })
}
module.exports = { index, sobre, game, areas };