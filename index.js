var express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./routers/route');

const app = express();
app.use(cookieParser());
app.use(express.static('views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', router)

app.listen(8001);
console.log('server is running on port 8001..');