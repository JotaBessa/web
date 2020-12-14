const express = require("express");
const CursoController = require("../app/controllers/CursoController");
const MainController = require("../app/controllers/main");
const router = express.Router();
router.get("/",         MainController.index);
router.get("/sobre",    MainController.sobre);
router.get("/game",     MainController.game);
router.get("/areas",    MainController.areas);
router.get('/curso', CursoController.index);
router.get('/curso/read/:id', CursoController.read);
router.get('/curso/create', CursoController.create);
router.post('/curso/create', CursoController.create);
router.get('/curso/update/:id', CursoController.update);
router.post('/curso/update/:id', CursoController.update);
router.post('/curso/remove/:id', CursoController.remove);

module.exports = router;