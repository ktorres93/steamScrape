/**
 * Created by kevin on 7/19/2017.
 */
var mongoose = require("mongoose");
//creates schema class
var Schema = mongoose.Schema;

//creates the title schema
var articleSchema = new Schema({
title: {
    type: String
}

});
// Create the titles model with the ArticleSchema
var Article = mongoose.model("article", articleSchema);

// Export model
module.exports = Article;