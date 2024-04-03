var express = require('express');
const { regi, form, thankyou, passkey, regilist, password } = require('../controller/registerlogin/register');
const { getlog, login, home, getmail, email } = require('../controller/registerlogin/login');
const isvaliduser = require('../middleware/token');
const router = express.Router();


router.get('/', form)
router.post('/submit', regi)
router.get('/thankyou', thankyou)
router.get('/password/:key', passkey)
router.post('/password', password)
// router.get('/list', regilist)

router.get('/login', getlog)
router.post('/login', login)
router.get('/home', isvaliduser, home)
router.get('/email', isvaliduser, getmail)
router.post('/email', isvaliduser, email)


module.exports = router;