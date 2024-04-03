

function route(app) {

    app.get('/csstask3', (req, res) => {
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/css-task-3/task3.html');
    })

}
module.exports = route;