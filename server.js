/**
 * Created by kevin on 7/19/2017.
 */
const cheerio = require('cheerio');
const express = require('express');
const request = require('request');
const mongojs = require('mongojs');

$ = require('cheerio');

var url = 'http://store.steampowered.com/';

request(url, function (error, response, body){
    console.log(error,response,body);
    console.log('statusCode:',response && response.statusCode);
    console.log("body", body);

    var $ =cheerio.load(body);
    console.log($(''));
});