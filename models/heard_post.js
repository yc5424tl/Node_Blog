let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let heardSchema = new Schema({
    post_author: String,
    post_title: String,
    post_body: String,
    artist_name: String,
    album_name: String,
    track_number: Number,
    url: HTMLLinkElement,
    user_rating: Number,
    date_created: Date,
    date_last_edit: Date,
});

let HeardPost = mongoose.model('HeardPost', heardSchema);

module.exports = HeardPost;