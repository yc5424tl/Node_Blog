let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let learnedSchema = new Schema({
    post_author: String,
    post_title: String,
    post_body: String,
    date_created: Date,
    date_last_edit: Date,
});

let LearnedPost = mongoose.model('LearnedPost', learnedSchema);

module.exports = LearnedPost;