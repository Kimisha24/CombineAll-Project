var express = require('express');
const { dynamictable, tictactoe, kukucube, jsevent, sort } = require('../controller/js-tasks/alljstask');
const isvaliduser = require('../middleware/token');
const router = express.Router();


router.get('/dynamictable',isvaliduser,dynamictable)
router.get('/kukucube', isvaliduser, kukucube)
router.get('/tictactoe', isvaliduser, tictactoe)
router.get('/jsevent', isvaliduser, jsevent)
router.get('/sort', isvaliduser, sort)



module.exports = router;