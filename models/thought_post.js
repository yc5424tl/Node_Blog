let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let thoughtSchema = new Schema({
    post_author: String,
    post_title: String,
    post_body: String,
    date_created: Date,
    date_last_edit: Date,
});

let ThoughtPost = mongoose.model('ThoughtPost', thoughtSchema);

module.exports = ThoughtPost;