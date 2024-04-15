const md5 = require('md5');
const jwt = require('jsonwebtoken');
const con = require('../../combinedb');

var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678910';
function random(n) {
    let salt = '';
    for (let i = 0; i < n; i++) {
        salt += char.charAt(Math.floor(Math.random() * char.length));
    }
    return salt;
}

const form = (req, res) => {
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
}

const regi = async (req, res) => {
    try {
        let { first_name, last_name, contact_no, email } = req.body
        console.log(req.body);

        sqlemail = `select * from users where email =?`
        const emailstore = await con.promise().query(sqlemail, [email]);

        // console.log(emailstore.length);

        if ((emailstore[0].length === 0)) {
            let sql = `insert into users(first_name,last_name,contact_no,email,salt,access_key) values (?,?,?,?,?,?);`
            data = await con.promise().query(sql, [first_name, last_name, contact_no, email, random(4), random(12)]);
            id = data[0].insertId;
            console.log(id);
            data = await con.promise().query(`select * from users where id = ${id}`);
            result = data[0][0];
            // expirekey(data);
            res.json(result);
        } else {
            res.json({ message: 0 });
        }

    } catch (err) {
        console.log(err);
    }
}

const thankyou = (req, res) => {
    try {
        res.render('regi-login/activation');
    } catch (err) {
        console.log(err);
    }
}

const passkey = async (req, res) => {
    try {
        let key = req.params.key;
        let id = key.split(' ')[0].split('=')[1];
        console.log(id);
        console.log(key);
        data = await con.promise().query(`select * from users where id=${id}`);
        let result = data[0][0];
        console.log(result);
        // expired...key
        // let date = new Date().valueOf();
        // // console.log(date);
        // let newdate = new Date(result.created_time.valueOf());
        // console.log(newdate);
        // let dateget = date - newdate;
        // //console.log(dateget);
        // let min = Math.floor(dateget/1000);
        // console.log(min);
        // dateget, min
        res.render('regi-login/password', { obj: key, result });

    } catch (err) {
        console.log(err);
    }
}

const password = async (req, res) => {
    try {
        let { salt, id, accesskey, password, con_pass } = req.body;
        if (password === con_pass) {
            password = password + salt;
            // console.log(password);
            let md5password = md5(password);
            // console.log(md5password);
            let sql2 = `update users set pass_word = ? where id=? and access_key=?`;
            await con.promise().query(sql2, [md5password, id, accesskey]);
            // res.json({ msg: 'your password is successfully created!!' });
            res.send('created password!!');
        }
    } catch (err) {
        console.log(err);
    }
}

const regilist = (req, res) => {
    const query = `select *,date_format(created_time,"%d,%m,%Y,%T") as created_time from users`;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.render('regi-login/list', { data: result });

    })
}


module.exports = { form, regi, thankyou, passkey, regilist, password }