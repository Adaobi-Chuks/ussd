const ussdRouter = require("./ussd.routes");

module.exports = (app) => {
    app.use(`/api/v1/ussd`, ussdRouter);
};