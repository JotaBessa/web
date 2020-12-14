const express = require('express');
const logger = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const router = require("./config/routes");
const sass = require("node-sass-middleware");
app.use(express.urlencoded({extended: false}))
app.use('/js', [
    express.static(__dirname + "/node_modules/jquery/dist/"),
    express.static(__dirname + "/node_modules/popper.js/dist/umd/"),
    express.static(__dirname + '/node_modules/bootstrap/dist/js/')
]);
app.use(sass({
    src: __dirname+"/public/sass/",
    dest: __dirname+"/public/css/",
    outputStyle: "compressed",
    prefix: '/css',
}))
app.use("/webfonts", express.static(__dirname+"/node_modules/@fortawesome/fontawesome-free/webfonts"))
app.use("/", express.static(__dirname+"/public"));
app.engine('handlebars', handlebars({
    helpers: require(__dirname+"/app/views/helpers/helpers.js")
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname+"/app/views");
app.use(router);
app.listen(5000, (req, res) => {
    console.log(`Servidor à porta: ${5000}`);
});