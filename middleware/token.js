const jwt = require('jsonwebtoken');

const isvaliduser = async (req, res, next) => {
    let { token } = req.cookies;
    if (!token) {
        return res.render('regi-login/login');
    } else {
        const decoded = jwt.verify(token, 'logintoken');
        req.email = decoded;
        next();
    }
}

module.exports = isvaliduser;