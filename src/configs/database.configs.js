const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

module.exports = () => {
    mongoose.connect(process.env.DATABASE_URI)
        .then(() => {
            console.log("Connected to db");
        })
        .catch((err) => {
            console.log("Failed to connect to db", err);
        });
}