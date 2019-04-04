var express = require('express');
var r=require( './route/Route.js').route
var cors = require("cors");


var app = express();
app.use(cors());
r(app)
app.listen(8080);