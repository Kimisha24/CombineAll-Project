var express = require('express');
const { getsearchcol, searchlist, searchcol } = require('../controller/searching/searchcol');
const { searchdelimiter, searchstulist } = require('../controller/searching/searchdelimiter');
const isvaliduser = require('../middleware/token');
const router = express.Router();

router.get('/searching-col',isvaliduser,getsearchcol)
router.get('/list', isvaliduser,searchlist)
router.post('/search', isvaliduser, searchcol)


router.get('/search-with-delimiter', isvaliduser,searchdelimiter)
router.get('/studentlist', isvaliduser,searchstulist)

module.exports = router;