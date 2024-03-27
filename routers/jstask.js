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

    app.get('/jsevent', (req, res) => {
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/Js-task/jsevent.html');
    });
    
    app.get('/Bubblesort', (req, res) => {
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/Js-task/sort.html');
    });
}

module.exports = route;