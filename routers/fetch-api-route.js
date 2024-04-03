var express = require('express');
const { test, details } = require('../controller/fetch-api/fetchapi');
const isvaliduser = require('../middleware/token');
const router = express.Router();


router.get('/fetchapi', isvaliduser, test)
router.get('/fetchapi/:id',isvaliduser,details)


module.exports = router;