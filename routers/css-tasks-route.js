var express = require('express');
const { task1, task2, task3 } = require('../controller/css-tasks/css-task');
const isvaliduser = require('../middleware/token');
const router = express.Router();

router.get('/csstask1',isvaliduser,task1)
router.get('/csstask2', isvaliduser,task2)
router.get('/csstask3', isvaliduser,task3)

module.exports = router;