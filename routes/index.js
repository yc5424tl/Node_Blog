let express = require('express');
let router = express.Router();
let app = express();

let LearnedPost = require('../models/learned_post');
let HeardPost = require('../models/heard_post');
let ThoughtPost = require('../models/thought_post');
let WatchedPost = require('../models/watched_post');

app.use('/static', express.static('public'));


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: "Kater Bater's Blog", layout: 'layout' });
});


// LEARNED //
router.get('/learned', function(req, res, next) {

    LearnedPost.find({all})
        .then((docs) => {
            res.render('view_learned', { title: 'Today I Learned', layout: 'layout', posts: docs });
        })
        .catch((err) => {
            next(err);
        });
    });

router.post('/learned', function(req, res) {
    res.send(null);
});


// THOUGHT  //
router.get('/thought', function(req, res, next) {
   ThoughtPost.find({all})
       .then((docs) => {
           res.render('view_thought', { title: 'Today I Thought', layout: 'layout', posts: docs });
       })
       .catch((err) => {
           next(err);
       });
});


// HEARD //
router.get('/heard', function(req, res, next) {
    HeardPost.find({all})
        .then((docs) => {
            res.render('view_heard', { title: 'Today I Heard', layout: 'layout', posts: docs });
        })
        .catch((err) => {
            next(err);
        });
});


// WATCHED //
router.get('/watched', function(req, res, next) {
    WatchedPost.find((all))
        .then((docs) => {
            res.render('view_watched', { title: 'Today I Watched', layout: 'layout', posts: docs });
        })
        .catch((err) => {
            next(err);
        });
    });


// WROTE //
router.get('/wrote', function(req, res, next) {
    });


// LOGIN //
router.get('/user_login', function(req, res, next) {
    res.render('view_user_login', { title: 'User Login', layout: 'layout' });
});

router.get('/admin', function(req, res, next) {
    res.render('admin_dashboard', { title: 'Administration'})
});

module.exports = router;
