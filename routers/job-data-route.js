var express = require('express');
const { getjobform, getform2, formsubmit, editform, updateform } = require('../controller/job-data/jobwithcrud');
const { getjobformajax, postsubmitajax, editformajax, updateajaxform } = require('../controller/job-data/jobwithajax');
const isvaliduser = require('../middleware/token');
const router = express.Router();


router.get('/jobwithcrud', isvaliduser, getjobform)
router.get('/form2', isvaliduser, getform2)
router.post('/formsubmit', isvaliduser,formsubmit)
router.get('/jobwithcrud/edit/:id', isvaliduser,editform)
router.post('/jobwithcrud/edit/:id/update', isvaliduser,updateform)


router.get('/jobwithajax', isvaliduser, getjobformajax)
router.post('/form-submit', isvaliduser, postsubmitajax)
router.get('/jobwithajax/edit/:id', isvaliduser, editformajax)
router.post('/jobwithajax/edit/:id/update', isvaliduser, updateajaxform)




module.exports = router;