var express = require('express');
const cookieParser = require('cookie-parser');

var route = require('./routers/regiroute');


var app = express();
app.use(cookieParser());
app.use(express.static('views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

route(app);


app.listen(8001);
console.log('server is running..');