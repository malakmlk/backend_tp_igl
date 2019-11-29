const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/bddIgl";

mongoose
    .connect(url,{
        useNewUrlParser : true,
        useCreateIndex : true,
        useUnifiedTopology: true
    })
    .then(value => {
        console.log("connected to database");
    })
    .catch(err => {
        console.error(err);
    });
exports.connection=mongoose.connection ;