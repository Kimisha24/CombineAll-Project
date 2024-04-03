var express = require('express');
const { colorderpagi } = require('../controller/pagination/colorder');
const { pagiwithorder } = require('../controller/pagination/pagiorder');
const isvaliduser = require('../middleware/token');
const router = express.Router();

router.get('/col-order-pagi', isvaliduser, colorderpagi)
router.get('/pagi-with-order', isvaliduser, pagiwithorder)

module.exports = router;