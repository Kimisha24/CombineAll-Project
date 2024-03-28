var con = require('../combinedb');


function route(app) {

    app.get('/searching-col', (req, res) => {

        let page = req.query.page || 1;

        if (page > 250 || page < 0) {
            res.redirect('/');
        }

        const limit = 200;
        const offset = (page - 1) * limit;

        // const column = req.query.select || 'stu_id';


        const sql = `select *, date_format(birth_date,"%d/%m/%Y") as birth_date  from stu_tables limit ${limit}  offset ${offset} `;



        con.query(sql, (err, result) => {
            if (err) throw err;
            res.render('searching-col/list', { data: result, page });

        })

    });


    app.get('/list', (req, res) => {

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

    });


    app.post('/search', (req, res) => {

        try {
            let page = req.query.page || 1;
            if (page > 250 || page < 0) {
                res.redirect('/');
            }
            // const limit = 500;
            // const offset = (page - 1) * limit;
            const { f_name, course, age, city, operator } = req.body;

            var sql = `select *, date_format(birth_date,"%d/%m/%Y") as birth_date  from stu_tables where `;
            // var qry = ` limit ${limit} offset ${offset}`;
            var condition = [];

            if (f_name) condition.push(`f_name like '${f_name}'`);
            if (course) condition.push(`course like '${course}'`);
            if (age) condition.push(`age like '${age}'`);
            if (city) condition.push(`city like '${city}'`);


            // if (f_name) condition.push(`f_name = '${f_name}'`);
            // if (course) condition.push(`course = '${course}'`);
            // if (age) condition.push(`age = '${age}'`);
            // if (city) condition.push(`city = '${city}'`);



            if (condition.length > 0) {
                sql += '' + condition.join(` ${operator} `);
            }

            else {
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

    })
}


module.exports = route;









