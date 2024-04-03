var express = require('express');
const { getjobform, getform2, formsubmit, editform, updateform } = require('../controller/job-data/jobwithcrud');
const { getjobformajax, postsubmitajax, editformajax, updateajaxform } = require('../controller/job-data/jobwithajax');
const router = express.Router();


router.get('/jobwithcrud', getjobform)
router.get('/form2', getform2)
router.post('/formsubmit', formsubmit)
router.get('/jobwithcrud/edit/:id', editform)
router.post('/jobwithcrud/edit/:id/update', updateform)


router.get('/jobwithajax', getjobformajax)
router.post('/form-submit', postsubmitajax)
router.get('/jobwithajax/edit/:id', editformajax)
router.post('/jobwithajax/edit/:id/update', updateajaxform)




module.exports = router;