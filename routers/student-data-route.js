var express = require('express');
const { stuattendence } = require('../controller/studentdata/stuattlist');
const { stuviewdetails, stuviewatt, stuexamlist } = require('../controller/studentdata/stuexamlist');
const router = express.Router();

router.get('/stu_attlist', stuattendence)

router.get('/stu_exam_list', stuexamlist)
router.get('/viewdetails', stuviewdetails)
router.get('/view_att', stuviewatt)



module.exports = router;