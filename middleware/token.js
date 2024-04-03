const isvaliduser = async (req, res, next) => {
    let { token } = req.cookies;
    if (!token) {
        return res.render('regi-login/login');
    } else {
        next();
    }
}

module.exports = isvaliduser;