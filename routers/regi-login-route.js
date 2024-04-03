var express = require('express');
const { regi, form, thankyou, passkey, regilist, password } = require('../controller/registerlogin/register');
const { getlog, login, home, getmail, email } = require('../controller/registerlogin/login');
const router = express.Router();


router.get('/', form)
router.post('/submit', regi)
router.get('/thankyou', thankyou)
router.get('/password/:key', passkey)
router.post('/password',password)
// router.get('/list', regilist)

router.get('/login', getlog)
router.post('/login', login)
router.get('/home', home)
router.get('/email', getmail)
router.post('/email',email)


module.exports = router;