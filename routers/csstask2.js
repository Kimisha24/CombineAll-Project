

function route(app) {

    app.get('/csstask2', (req, res) => {
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/css-task-2/task2.html');
    })

}
module.exports = route;