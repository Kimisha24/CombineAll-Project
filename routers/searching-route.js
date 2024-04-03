var express = require('express');
const { getsearchcol, searchlist, searchcol } = require('../controller/searching/searchcol');
const { searchdelimiter, searchstulist } = require('../controller/searching/searchdelimiter');
const router = express.Router();

router.get('/searching-col',getsearchcol)
router.get('/list', searchlist)
router.post('/search', searchcol)


router.get('/search-with-delimiter', searchdelimiter)
router.get('/studentlist', searchstulist)

module.exports = router;