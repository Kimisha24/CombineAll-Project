var express = require('express');
const { test, details } = require('../controller/fetch-api/fetchapi');
const router = express.Router();


router.get('/fetchapi', test)
router.get('/fetchapi/:id',details)


module.exports = router;