const Router = require("express").Router();
const homeRouteController = require("./controller/homeRouteController")

//Router setup...
Router.get("/",homeRouteController);

module.exports = Router;