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

const getlog = (req, res) => {
    try {
        res.render('regi-login/login');
    } catch (err) {
        console.log(err);
    }
}

const login = async (req, res) => {
    try {
        let { email, password } = req.body;
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
                let token = jwt.sign({ email }, `logintoken`, { expiresIn: '1h' });
                res.cookie('token', token, { expires: new Date(Date.now() + 900000), httpOnly: true });
                res.json({ msg: 'welcome' });
            } else {
                res.json({ msg: 'email or password are wrong' });
            }
        }
    } catch (err) {
        console.log(err);
    }
}

const home = (req, res) => {
    try {
        res.render('regi-login/home')
    } catch (err) {
        console.log(err)
    }
}

const getmail = (req, res) => {
    try {
        res.render('regi-login/email');
    } catch (err) {
        console.log(err);
    }
}

const email = async (req, res) => {
    try {
        let email = req.body.email;
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
}

const logout = (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
}

module.exports = { getlog, login, home, email, getmail, logout }