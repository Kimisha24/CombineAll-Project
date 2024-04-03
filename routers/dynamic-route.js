var express = require('express');
const { selector, state, city } = require('../controller/dynamic/citystate');
const { querygrid } = require('../controller/dynamic/querygrid');
const isvaliduser = require('../middleware/token');
const router = express.Router();


router.get('/selector', isvaliduser, selector)
router.get('/state', isvaliduser, state)
router.get('/city/:state', isvaliduser, city)

router.get('/dynamicquerygrid', isvaliduser, querygrid)

module.exports = router;