var con = require('../combinedb');

function route(app){
   
app.get('/selector', (req, res) => {
  
     res.render('city-state/selector');
});

app.get('/state', async (req, res) => {
    sql = `select * from state_master`;
    data = await con.promise().query(sql);
    result = data[0];

    // console.log(result);
    res.send(result);
})

app.get('/city/:state', async (req, res) => {
    id = req.params.state;
    sql1 = `select * from city_master where state_id = ${id}`;
    data = await con.promise().query(sql1);
    result1 = data[0];

    // console.log(result1);
    res.send(result1);

})

}

module.exports = route;
