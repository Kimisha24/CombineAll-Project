
function route(app) {
    
    app.get('/csstask1', (req, res) => {
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/css-task-1/frame.html');
    })

}
module.exports = route;
