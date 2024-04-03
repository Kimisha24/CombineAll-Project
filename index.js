var express = require('express');
const cookieParser = require('cookie-parser');
const regi_login = require('./routers/regi-login-route');
const city_state = require('./routers/city-state-route');
const js_task = require('./routers/js-task-route');
const css_task = require('./routers/css-tasks-route');
const fetch_api = require('./routers/fetch-api-route');



var app = express();
app.use(cookieParser());
app.use(express.static('views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/', regi_login)
app.use('/', city_state)
app.use('/', js_task)
app.use('/', css_task)
app.use('/', fetch_api)

app.listen(8001);
console.log('server is running on port 8001..');