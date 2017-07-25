//For the scrape
var cheerio = require('cheerio');
var request = require('request');

//Dependancies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var app = express();

//Require note and article models
var Note = require('./models/notes.js');
var Article = require('./models/articles.js');

$ = require('cheerio');

var url = 'http://store.steampowered.com/';

    request(url, function (error, response, html) {
        //console.log(error,response,body);
        //console.log('statusCode:',response && response.statusCode);
        //console.log("body", body);

        var $ = cheerio.load(html);
        console.log($('.tab_item_name').text());
        $('.tab_item_name').each(function (i, element) {

            var result = {};

            result.title = $(this).children("a").text();

            var entry = new Article(result);
            // Now, save that entry to the db
            entry.save(function (err, doc) {
                // Log an    y errors
                if (err) {
                    console.log(err);
                }
                // Or log the doc
                else {
                    console.log(doc);
                }
            });

        });

    });

// Database configuration with mongoose
var PORT = process.env.PORT || 27017;
var db = process.env.MONGODB_URI || "mongodb://localhost/steamScrape";
    mongoose.connect("mongodb://localhost/steamScrape");



//Listen on port 3000
app.listen(PORT, function() {
    console.log("Connected!");
});
