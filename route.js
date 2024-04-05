const express = require('express');
const isvaliduser = require('./middleware/token');

const { regi, form, thankyou, passkey, regilist, password } = require('./controller/registerlogin/register');
const { getlog, login, home, getmail, email, logout } = require('./controller/registerlogin/login');
const { task1, task2, task3 } = require('./controller/css-tasks/css-task');
const { dynamictable, tictactoe, kukucube, jsevent, sort } = require('./controller/js-tasks/alljstask');
const { selector, state, city } = require('./controller/dynamic/citystate');
const { querygrid } = require('./controller/dynamic/querygrid');
const { test, details } = require('./controller/fetch-api/fetchapi');
const { colorderpagi } = require('./controller/pagination/colorder');
const { pagiwithorder } = require('./controller/pagination/pagiorder');
const { getsearchcol, searchlist, searchcol } = require('./controller/searching/searchcol');
const { searchdelimiter, searchstulist } = require('./controller/searching/searchdelimiter');
const { stuattendence } = require('./controller/studentdata/stuattlist');
const { stuviewdetails, stuviewatt, stuexamlist } = require('./controller/studentdata/stuexamlist');
const { getjobform, getform2, formsubmit, editform, updateform } = require('./controller/job-data/jobwithcrud');
const { getjobformajax, postsubmitajax, editformajax, updateajaxform } = require('./controller/job-data/jobwithajax');


const router = express.Router();
const regi_login = express.Router();
const css_task = express.Router();
const js_task = express.Router();
const dynamic = express.Router();
const fetch_api = express.Router();
const pagination = express.Router();
const searching = express.Router();
const studentdata = express.Router();
const jobwithdata = express.Router();



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
router.get('/logout', logout)

router.get('/dynamictable', isvaliduser, dynamictable)
router.get('/kukucube', isvaliduser, kukucube)
router.get('/tictactoe', isvaliduser, tictactoe)
router.get('/jsevent', isvaliduser, jsevent)
router.get('/sort', isvaliduser, sort)
router.get('/csstask1', isvaliduser, task1)
router.get('/csstask2', isvaliduser, task2)
router.get('/csstask3', isvaliduser, task3)
router.get('/selector', isvaliduser, selector)
router.get('/state', isvaliduser, state)
router.get('/city/:state', isvaliduser, city)
router.get('/dynamicquerygrid', isvaliduser, querygrid)
router.get('/fetchapi', isvaliduser, test)
router.get('/fetchapi/:id', isvaliduser, details)
router.get('/col-order-pagi', isvaliduser, colorderpagi)
router.get('/pagi-with-order', isvaliduser, pagiwithorder)
router.get('/searching-col', isvaliduser, getsearchcol)
router.get('/list', isvaliduser, searchlist)
router.post('/search', isvaliduser, searchcol)
router.get('/search-with-delimiter', isvaliduser, searchdelimiter)
router.get('/studentlist', isvaliduser, searchstulist)
router.get('/stu_attlist', isvaliduser, stuattendence)
router.get('/stu_exam_list', isvaliduser, stuexamlist)
router.get('/viewdetails', isvaliduser, stuviewdetails)
router.get('/view_att', isvaliduser, stuviewatt)
router.get('/jobwithcrud', isvaliduser, getjobform)
router.get('/form2', isvaliduser, getform2)
router.post('/formsubmit', isvaliduser, formsubmit)
router.get('/jobwithcrud/edit/:id', isvaliduser, editform)
router.post('/jobwithcrud/edit/:id/update', isvaliduser, updateform)
router.get('/jobwithajax', isvaliduser, getjobformajax)
router.post('/form-submit', isvaliduser, postsubmitajax)
router.get('/jobwithajax/edit/:id', isvaliduser, editformajax)
router.post('/jobwithajax/edit/:id/update', isvaliduser, updateajaxform)


router.use('/', regi_login)
router.use('/', dynamic)
router.use('/', js_task)
router.use('/', css_task)
router.use('/', fetch_api)
router.use('/', pagination)
router.use('/', searching)
router.use('/', studentdata)
router.use('/', jobwithdata)

module.exports = router;