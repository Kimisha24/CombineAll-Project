var express = require('express');
const { task1, task2, task3 } = require('../controller/css-tasks/css-task');
const router = express.Router();

router.get('/csstask1',task1)
router.get('/csstask2',task2)
router.get('/csstask3',task3)

module.exports = router;