

let createError = require('http-errors');
let path = require('path');


let express = require('express');
let flash = require('express-flash');
let mongoose = require('mongoose');
let db_url = process.env.NODE_BLOG_DB;
let sess_secret = process.env.BLOG_SESS_SECRET;
let hbs = require('express-hbs');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let session = require('express-session');
let auth = require('./middleware/authentication');

let User = require('./models/user_model');


let app = express();

mongoose.connect(db_url)
    .then( () => {console.log('Connected to mLab');})
    .catch( (err) => {console.log('Error connecting to mLab', err);});

app.use(express.static('./public'));
// view engine setup
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: sess_secret, resave: false, saveUninitialized: false}));
app.use(flash());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(methodOverride('X-HTTP-Method-Override'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    if (err.kind === 'ObjectId' && err.name === 'CastError') {
        err.status = 404;
        err.message = 'ObjectId Not Found';
        res.status(err.status);
        res.render('404');
    }

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render error page
    res.status(err.status || 500);
    res.render('error');
});

app.use(function(req, res, next){
    let err = req.session.error,
        msg = req.session.notice,
        success = req.session.success;

    delete req.session.error;
    delete req.session.success;
    delete req.session.notice;

    next();
});





module.exports = app;