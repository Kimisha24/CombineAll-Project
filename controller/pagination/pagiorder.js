const con = require('../../combinedb');

const pagiwithorder = (req, res) => {
    let page = req.query.page || 1;
    if (page > 250 || page < 0) {
        res.redirect('/');
    }

    const limit = 200;
    const offset = (page - 1) * limit;
    const order = req.query.order || 'asc';
    const query = `select *, date_format(birth_date,"%d/%m/%Y") as birth_date , date_format(created_at,"%d,%m,%Y,%T") as created_at from stu_tables order by f_name ${order} limit ${limit}  offset ${offset}`;

    con.query(query, (err, result) => {
        if (err) throw err;
        res.render('pagi-with-order/list', { data: result, page, order });
    })
}

module.exports = { pagiwithorder }