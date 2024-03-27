function route(app) {

    app.get('/dynamictable', (req, res) => {
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/Js-task/dynamictable.html');
    });

    app.get('/Kukucube', (req, res) => {
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/Js-task/Kukucube.html');
    });

    app.get('/tictactoe', (req, res) => {
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/Js-task/tictactoe.html');
    });



}

module.exports = route;