function route(app) {

    app.get('/dynamictable', (req, res) => {
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/Js-task/dynamictable.html');
    });

    app.get('/Kukucube', (req, res) => {
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/Js-task/Kukucube.html');
    });


}

module.exports = route;