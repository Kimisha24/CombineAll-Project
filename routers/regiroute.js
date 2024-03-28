var con = require('../combinedb');
var citystateroute = require('../routers/citystateroute');
var alljstask = require('../routers/jstask');
var pagiwithorder = require('../routers/pagiwithorderroute');

var md5 = require('md5');
const jwt = require('jsonwebtoken');

function route(app) {
    
    citystateroute(app);
    alljstask(app);
    pagiwithorder(app);



    var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678910';
    function random(n) {
        let salt = '';
        for (let i = 0; i < n; i++) {
            salt += char.charAt(Math.floor(Math.random() * char.length));
        }
        return salt;
    }

    app.get('/', (req, res) => {
        try {

            if (req.cookies.token) {
                res.render('regi-login/home');
            }
            else {
                res.render('regi-login/form');
            }
        } catch (err) {
            console.log(err);
        }
    });

    app.post('/submit', async (req, res) => {
        try {
            console.log(req.body);
            var { first_name, last_name, contact_no, email } = req.body
            var sql = `insert into users(first_name,last_name,contact_no,email,salt,access_key) values (?,?,?,?,?,?);`
            data = await con.promise().query(sql, [first_name, last_name, contact_no, email, random(4), random(12)]);
            id = data[0].insertId;
            console.log(id);
            data = await con.promise().query(`select * from users where id = ${id}`);
            result = data[0][0];
            // expirekey(data);
            res.json(result);

        } catch (err) {
            console.log(err);
        }
    })


    // function expirekey(data) {
    //     setTimeout(async () => {
    //         let keyup = `update users set access_key = null where id = ${id}`;
    //         console.log(`user update id is : ${id}`);
    //         await con.promise().query(keyup);
    //         console.log(id);
    //     }, (1000 * 10));
    // }

    app.get('/thankyou', (req, res) => {
        try {
            res.render('regi-login/activation');
        } catch (err) {
            console.log(err);
        }
    });

    app.get('/password/:key', async (req, res) => {
        try {
            let key = req.params.key;
            let id = key.split(' ')[0].split('=')[1];
            console.log(id);
            console.log(key);
            data = await con.promise().query(`select * from users where id=${id}`);
            let result = data[0][0];
            // console.log(result);
            var date = new Date().valueOf();
            // console.log(date);
            var newdate = new Date(result.created_time.valueOf());  
            console.log(newdate);
            var dateget = date - newdate;
            //console.log(dateget);
            var min = Math.floor(dateget/1000);
            console.log(min);
            
            res.render('regi-login/password', { obj: key, result, dateget,min});

        } catch (err) {
            console.log(err);
        }
    })

    app.post('/password', async (req, res) => {
        try {
            var { salt, id, accesskey, password, con_pass } = req.body;
            if (password === con_pass) {
                password = password + salt;
                // console.log(password);
                let md5password = md5(password);
                // console.log(md5password);
                var sql2 = `update users set pass_word = ? where id=? and access_key=?`;
                await con.promise().query(sql2, [md5password, id, accesskey]);
                // res.json({ msg: 'your password is successfully created!!' });
                res.send('created password!!');
            }
        } catch (err) {
            console.log(err);
        }
    });

    app.get('/login', (req, res) => {
        res.render('regi-login/login');
    })

    app.post('/login', async (req, res) => {
        try {
        var { email, password } = req.body;
        console.log(email, password);
        sql = `select * from users where email = ?`;
        data = await con.promise().query(sql, [email]);
        result = data[0][0];
        console.log(result);
        if (data[0].length === 0) {
            res.json({ msg: 'please enter your email & password' });
        } else {
            md5pas = md5(password + result.salt);
            if (result.pass_word === md5pas) {
                var token = jwt.sign({ email }, `logintoken`, { expiresIn: '1h' });
                res.cookie('token', token, { expires: new Date(Date.now() + 900000), httpOnly: true });
                res.json({ msg: 'welcome' });
            }else{
            res.json({ msg: 'email or password are wrong' });
        }
        }
        } catch (err) {
            console.log(err);
        }
    })

    app.get('/home', (req, res) => {
        res.render('regi-login/home');
    })

    app.get('/email', (req, res) => {
        res.render('regi-login/email');
    });

    app.post('/email', async (req, res) => {
        
        try {
            var email = req.body.email;
            sql1 = `update users set salt = ?, access_key=? where email=? `;
            data = await con.promise().query(sql1, [random(4), random(12), email]);
            
            sqlemail = `select * from users where email = ?`
            data = await con.promise().query(sqlemail, [email]);
            result = data[0][0];
            console.log(result);
            
            res.render('regi-login/uplink', { result });
        } catch (err) {
            console.log(err);
        }

    });

    app.get('/list', (req, res) => {

        const query = `select *,date_format(created_time,"%d,%m,%Y,%T") as created_time from users`;

        con.query(query, (err, result) => {
            if (err) throw err;
            res.render('regi-login/list', { data: result });

        })
    });

    app.get('*', (req, res) => {
        try {
            res.send('ERROR please check your url..');
        } catch (err) {
            console.log(err);
        }
    })

}

module.exports = route;