const con = require('../../combinedb');

const getsearchcol = (req, res) => {
    let page = req.query.page || 1;
    if (page > 250 || page < 0) {
        res.redirect('/');
    }
    const limit = 200;
    const offset = (page - 1) * limit;
    const sql = `select *, date_format(birth_date,"%d/%m/%Y") as birth_date  from stu_tables limit ${limit}  offset ${offset} `;

    con.query(sql, (err, result) => {
        if (err) throw err;
        res.render('searching-col/list', { data: result, page });
    })
}

const searchlist = (req, res) => {
    let page = req.query.page || 1;
    if (page > 250 || page < 0) {
        res.redirect('searching-col/');
    }

    const limit = 200;
    const offset = (page - 1) * limit;
    const ID = Number(req.query.search_id);
    const sql = `select *, date_format(birth_date,"%d/%m/%Y") as birth_date  from stu_tables where stu_id = ${ID}  limit ${limit}  offset ${offset} `;

    con.query(sql, (err, result) => {
        if (err) throw err;
        res.render('searching-col/list', { data: result, page, ID });
    })
}

const searchcol = (req, res) => {
    try {
        let page = req.query.page || 1;
        if (page > 250 || page < 0) {
            res.redirect('/');
        }
        // const limit = 500;
        // const offset = (page - 1) * limit;
        const { f_name, course, age, city, operator } = req.body;
        let sql = `select *, date_format(birth_date,"%d/%m/%Y") as birth_date  from stu_tables where `;
        // let qry = ` limit ${limit} offset ${offset}`;
        let condition = [];
        if (f_name) condition.push(`f_name like '${f_name}'`);
        if (course) condition.push(`course like '${course}'`);
        if (age) condition.push(`age like '${age}'`);
        if (city) condition.push(`city like '${city}'`);

        if (condition.length > 0) {
            sql += '' + condition.join(` ${operator} `);
        } else {
            sql = 'select *, date_format(birth_date,"%d/%m/%Y") as birth_date  from stu_tables;'
        }

        con.query(sql, (err, result) => {
            if (err) throw err;
            res.render('searching-col/list', { data: result, page });
        })
        // console.log(sql);

    } catch (err) {
        console.log(err);
    }

}

module.exports = { getsearchcol, searchlist, searchcol }