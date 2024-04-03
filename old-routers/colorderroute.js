var con = require('../combinedb');


function route(app) {


    app.get('/col-order-pagi', (req, res) => {

        let page = req.query.page || 1;

        if (page > 250 || page < 0) {
            res.redirect('/');
        }

        const limit = 200;
        const offset = (page - 1) * limit;
        // const order = req.query.order || 'asc'; , date_format(created_at,"%d,%m,%Y,%T") as created_at

        const order = req.query.sort === 'desc' ? 'desc' : 'asc';
        const column = req.query.select || 'stu_id';



        const query = `select *, date_format(birth_date,"%d/%m/%Y") as birth_date  from stu_tables order by ${column} ${order} limit ${limit}  offset ${offset}`;

        con.query(query, (err, result) => {
            if (err) throw err;
            res.render('col-order-pagi/list', { data: result, page, order, column });

        })

    });
}


module.exports = route;