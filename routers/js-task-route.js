var express = require('express');
const { dynamictable, tictactoe, kukucube, jsevent, sort } = require('../controller/js-tasks/alljstask');
const router = express.Router();


router.get('/dynamictable',dynamictable)
router.get('/kukucube', kukucube)
router.get('/tictactoe', tictactoe)
router.get('/jsevent', jsevent)
router.get('/sort', sort)



module.exports = router;