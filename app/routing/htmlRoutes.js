const path = require('path');

module.exports = function(app) { //why (app) at end?
    
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });


    app.get("*", function(req, res) { //req & res cannot be changed, right? Can't use pickles for example...
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};