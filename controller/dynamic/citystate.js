const con = require('../../combinedb');

const selector = (req, res) => {
    try {
        res.render('city-state/selector');
    } catch (err) {
        console.log(err);
    } 
}

const state = async (req, res) => {
    sql = `select * from state_master`;
    data = await con.promise().query(sql);
    result = data[0];
    // console.log(result);
    res.send(result);
}
    
const city = async (req, res) => {
    id = req.params.state;
    sql1 = `select * from city_master where state_id = ${id}`;
    data = await con.promise().query(sql1);
    result1 = data[0];
    // console.log(result1);
    res.send(result1);
}


module.exports={selector,city,state}