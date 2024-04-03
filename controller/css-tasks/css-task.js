
const task1 = (req, res) => {
    res.render('css-task-1/frame.ejs')
}

const task2 = (req, res) => {
    res.render('css-task-2/task2.ejs')
}

const task3 = (req, res) => {
    res.render('css-task-3/task3.ejs')
}


module.exports = {task1,task2,task3}