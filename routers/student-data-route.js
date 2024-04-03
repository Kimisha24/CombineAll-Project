var express = require('express');
const { stuattendence } = require('../controller/studentdata/stuattlist');
const { stuviewdetails, stuviewatt, stuexamlist } = require('../controller/studentdata/stuexamlist');
const isvaliduser = require('../middleware/token');
const router = express.Router();

router.get('/stu_attlist', isvaliduser,stuattendence)

router.get('/stu_exam_list', isvaliduser,stuexamlist)
router.get('/viewdetails', isvaliduser, stuviewdetails)
router.get('/view_att', isvaliduser, stuviewatt)


module.exports = router;