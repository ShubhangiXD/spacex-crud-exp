const { getRockets } = require("../Controllers/RocketController");
const routes = require("express").Router();
routes.get("/rockets", getRockets);
module.exports = routes;