let express = require('express');
let router = express.Router();
let User = require('../models/user_model');
let mongoose = require('mongoose');
let db = mongoose.createConnection('localhost', 'authTest');
let authSchema = mongoose.Schema


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});



module.exports = router;
