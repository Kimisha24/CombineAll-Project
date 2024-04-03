const express = require('express');
const router = express.Router();

const regi_login = require('./regi-login-route');
const dynamic = require('./dynamic-route');
const js_task = require('./js-task-route');
const css_task = require('./css-tasks-route');
const fetch_api = require('./fetch-api-route');
const pagination = require('./pagination-route');
const searching = require('./searching-route');
const studentdata = require('./student-data-route');
const jobwithdata = require('./job-data-route');


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