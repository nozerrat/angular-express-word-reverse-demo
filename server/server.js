"use strict";
var fs         = require("fs");
var path       = require("path");
var bodyParser = require("body-parser");
var express    = require("express");
var session    = require("express-session");
var methodOverride = require("method-override");
var app        = express();


/* Variebles globales */
require("./autoload");


/* Middleware */
console.log("setting up middleware...");
app.use(express.static(path.join(__dirname, CONFIG.client.paths.app)));
app.use(express.static(path.join(__dirname, CONFIG.client.paths.public)));
app.use(express.static(path.join(__dirname, CONFIG.client.paths.filter)));
app.use(express.static(path.join(__dirname, CONFIG.client.paths.service)));
app.use(express.static(path.join(__dirname, CONFIG.client.paths.factory)));
app.use(express.static(path.join(__dirname, CONFIG.client.paths.directive)));
app.use(express.static(path.join(__dirname, CONFIG.client.paths.controller)));
app.use(session({secret: CONFIG.keys, resave: true,saveUninitialized: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-TripPlanner-SessionId, X-TripPlanner-Created, X-TripPlanner-UserId, Content-Type");
    next();
});


/* Router */
ROUTER.registerRoute( app );


/* Run Run */
var server = app.listen(process.env.PORT || CONFIG.server.port, CONFIG.server.host,  function () {
    console.log("Listening on port %d", server.address().port);
});
