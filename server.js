/**
 * Created by kevin on 7/19/2017.
 */
// Listen on port 3000
// app.listen(3000, function() {
//     console.log("Connected!");
// });

//For the scrape
var cheerio = require('cheerio');
var request = require('request');
//Dependancies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
//Require note and article models
var note = require('./models/notes.js');
var title = require('./models/titles.js');

$ = require('cheerio');

var url = 'http://store.steampowered.com/';

request(url, function (error, response, html) {
    //console.log(error,response,body);
    //console.log('statusCode:',response && response.statusCode);
    //console.log("body", body);

    var $ = cheerio.load(html);
    console.log($('.tab_item_name').text());
    // $('.tab_item_name').each(function (i,element) {
    //
    //     var result = {};
    //
    //     result.title = $(this).children("a").text();
    //
    //     var entry = new title(result);
    //     // Now, save that entry to the db
    //     entry.save(function(err, doc) {
    //         // Log any errors
    //         if (err) {
    //             console.log(err);
    //         }
    //         // Or log the doc
    //         else {
    //             console.log(doc);
    //         }
    //     });
    //
    // });

});
// Database configuration with mongoose
    mongoose.connect("mongodb://localhost/steamScrape");
    var db = mongoose.connection;

// Show any mongoose errors
    db.on("error", function (error) {
        console.log("Mongoose Error: ", error);
    });
// Once logged in to the db through mongoose, log a success message
    db.once("open", function () {
        console.log("Mongoose connection successful.");
    });
