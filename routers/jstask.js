function route(app) {

    app.get('/dynamictable', (req, res) => {
        res.sendFile('/home/kimisha-ladani/Documents/project-combinepractice/views/Js-task/dynamictable.html');
    });

    

}

module.exports = route;