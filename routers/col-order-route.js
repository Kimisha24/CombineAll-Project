var express = require('express');
const { colorderpagi } = require('../controller/col-order/colorder');
const router = express.Router();

router.get('/col-order-pagi',colorderpagi)


module.exports = router;