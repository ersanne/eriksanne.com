var mongoose = require('mongoose');

module.exports.connect = function() {
    mongoose.connect('mongodb://mongo:27017/eriksanne-com', {useNewUrlParser: true});
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function(callback){
        console.log("Connection Succeeded");
    });
    return db;
}