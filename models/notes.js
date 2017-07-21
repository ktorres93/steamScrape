/**
 * Created by kevin on 7/19/2017.
 */
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteSchema = new Schema({
    title:{
        type: String,
        required: true
    },
});
//Create the titles model with the ArticleSchema
var Note = mongoose.model("notes", noteSchema);

// Export model
module.exports = Note;