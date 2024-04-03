var express = require('express');
const { selector, state, city } = require('../controller/city-state/citystate');
const router = express.Router();


router.get('/selector',selector)
router.get('/state',state)
router.get('/city/:state',city)




module.exports = router;