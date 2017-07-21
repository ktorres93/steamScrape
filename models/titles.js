/**
 * Created by kevin on 7/19/2017.
 */
var mongoose = require("mongoose");
//creates schema class
var Schema = mongoose.Schema;

//creates the title schema
var titleSchema = new Schema({
title:{
   type: String,
    required: true
},

});
// Create the titles model with the ArticleSchema
var Title = mongoose.model("titles", titleSchema);

// Export model
module.exports = Title;