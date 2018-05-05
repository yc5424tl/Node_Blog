let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let watchedSchema = new Schema({
    post_author: String,
    post_title: String,
    post_body: String,
    url: HTMLLinkElement,
    file: File,
    date_created: Date,
    date_last_edit: Date,
});

let WatchedPost = mongoose.model('WatchedPost', watchedSchema);

module.exports = WatchedPost;