let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// LEARNED //
router.get('/learned', function(req, res, next) {
    res.render('view_learned', { title: 'Today I Learned' });
});

router.post('/learned', function(req, res) {
    res.send(null);
});


// THOUGHT  //
router.get('/thought', function(req, res, next) {
    res.render('view_thought', { title: 'Today I Thought'});
});


// HEARD //
router.get('/heard', function(req, res, next) {
    res.render('view_heard', { title: 'Today I Heard'});
});


// WATCHED //
router.get('/watched', function(req, res, next) {
    res.render('view_watched', { title: 'Today I Watched'});
});


// WROTE //
router.get('/wrote', function(req, res, next) {
    res.render('view_wrote', { title: 'Today I Wrote'});
});


// LOGIN //
router.get('/user_login', function(req, res, next) {
    res.render('view_user_login', { title: 'User Login'});
});

router.get('/admin', function(req, res, next) {
    res.render('admin_dashboard', { title: 'Administration'})
});

module.exports = router;
