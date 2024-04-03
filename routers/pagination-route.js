var express = require('express');
const { colorderpagi } = require('../controller/pagination/colorder');
const { pagiwithorder } = require('../controller/pagination/pagiorder');
const router = express.Router();

router.get('/col-order-pagi',colorderpagi)
router.get('/pagi-with-order',pagiwithorder)

module.exports = router;