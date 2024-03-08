const {app} = require("./app");
const { logger } = require("./middlewares/errors.middlewares");
const PORT = process.env.PORT;

app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}`);
});