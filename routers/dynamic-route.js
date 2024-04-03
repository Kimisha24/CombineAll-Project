var express = require('express');
const { selector, state, city } = require('../controller/dynamic/citystate');
const { querygrid } = require('../controller/dynamic/querygrid');
const router = express.Router();


router.get('/selector',selector)
router.get('/state',state)
router.get('/city/:state',city)

router.get('/dynamicquerygrid', querygrid)

module.exports = router;