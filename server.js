var express = require('express');
var regiroute = require('./routers/regiroute');

var app = express();
app.use(express.static('views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

regiroute(app);


app.listen(8001);
console.log('server is running..');