// Packages
const { json, urlencoded } = require("express");
const morgan = require("morgan");
const cors = require("cors");
// Modules
const { errorMiddleware } = require("./errors.middlewares");
const indexRoutes = require("../routes/index.routes");
require('../configs/database.configs')();

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(cors());
  app.use(json());
  app.use(urlencoded());
  indexRoutes(app);
  app.use(errorMiddleware);
};