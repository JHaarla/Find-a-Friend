const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false })); // true vs false??? which to use? what does this line mean exactly?

app.use(express.json());

//ROUTER
require("./app/routing/apiRoutes")(app); //why the (app) at the end?
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});