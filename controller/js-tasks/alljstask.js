const dynamictable = (req, res) => {
    try {
        res.render('Js-task/dynamictable.ejs') 
    } catch (error) {
        console.log(error);
    }
}

const kukucube = (req, res) => {
    try {
        res.render('Js-task/kukucube.ejs')
    } catch (error) {
        console.log(error);
    }
}

const sort = (req, res) => {
    try {
        res.render('Js-task/sort.ejs')
    } catch (error) {
        console.log(error);
    }
}

const jsevent = (req, res) => {
    try {
        res.render('Js-task/jsevent.ejs')
    } catch (error) {
        console.log(error);
    }
}

const tictactoe = (req, res) => {
    try {
        res.render('Js-task/tictactoe.ejs')
    } catch (error) {
        console.log(error);
    }
}


module.exports = {dynamictable,tictactoe,kukucube,sort,jsevent}