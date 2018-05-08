let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let URL = require('mongoose-type-url');

let watchedSchema = new Schema({
    post_author: {
        type: String,
        required: true,
        minlength: 7,
        maxlength: 50,
    },
    post_title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50,
    },
    post_body: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 25000,
    },
    url: {
        type: URL,
        required: false,
        minlength: 5,
        maxlength: 300,
    },
    file: Schema.Types.Mixed,
    date_created: Date,
    date_last_edit: Date,
});

let WatchedPost = mongoose.model('WatchedPost', watchedSchema);

module.exports = WatchedPost;