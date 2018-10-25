var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


//tools for scrapping
var axios = require("axios");// this sounds like a harry potter spell
var cheerio = require("cheerio");

//require for the models
var db = require("./models");

var PORT =  3000;

//INITIALZE EXPRESS
 
var app = express();

//middleware- like morgan etc

//logging
app.use(logger("dev"));
//bodyparser for form submissions
app.use(bodyParser.urlencoded({extended: true}));
//serve folder as a static directory 
app.use(express.static("public"));

//Connect to the DB
//idk what this means and I will come back to this

mongoose.connect("mongodb://localhost/articlescraper", {useNewUrlParser: true});

//routes

//get routes for the article site I select

app.get

app.get

app.post
