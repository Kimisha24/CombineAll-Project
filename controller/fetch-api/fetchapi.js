
const test = function (req, res) {
    try {
        res.render('fetch-api/test.ejs')
    } catch (err) {
        console.log(err);
    }
}

const details = function (req, res) {
    try {
        const id = req.query.id || 1;
        res.render('fetch-api/details.ejs')
    } catch (err) {
        console.log(err);
    }
}

module.exports = {test,details}