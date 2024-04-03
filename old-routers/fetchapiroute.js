var fs = require('fs');

function route(app){

app.get('/fetchapi', function (req, res) {

    try {
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/fetch-api/test.html');
    } catch (err) {
        console.log(err);
    }

})

    app.get('/fetchapi/:id', function (req, res) {

    try {

        const id = req.query.id || 1;
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/fetch-api/details.html');
    } catch (err) {
        console.log(err);
    }

})
};

module.exports = route;