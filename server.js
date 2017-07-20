/**
 * Created by kevin on 7/19/2017.
 */
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

request(url, function (error, response, body){
    console.log(error,response,body);
    console.log('statusCode:',response && response.statusCode);
    console.log("body", body);

    var $ =cheerio.load(body);
    console.log($(''));
});