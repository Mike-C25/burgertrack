var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var port = 3000 || process.env.PORT;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController.js");

app.use("/", routes);

app.listen(port, function(res){
	console.log("listening on port: " + port);
});
