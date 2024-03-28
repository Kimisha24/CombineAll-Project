var con = require('../combinedb');

function route(app) {

    app.get('/search-with-delimiter', (req, res) => {

        const sql = 'select *, date_format(birth_date,"%d/%m/%Y") as birth_date  from stu_tables;';

        con.query(sql, (err, result) => {
            if (err) throw err;
            res.render('search-with-delimiter/studentlist', { data: result });

        })
        // console.log(sql);
    })

    app.get('/studentlist', (req, res) => {
        try {

            var sql = ` select *, date_format(birth_date,"%d/%m/%Y") as birth_date  from stu_tables`;

            const search = req.query.search;


            var array = [];
            var current = '';

            if (req.query.search) {

                for (let i = 0; i < search.length; i++) {

                    if (search[i] == '_' || search[i] == '^' || search[i] == '$' || search[i] == '#' || search[i] == ':') {
                        if (current != '') {
                            array.push(current);
                            current = '';
                        }

                        current += search[i];
                    } else {
                        current += search[i];
                        if (i === search.length - 1 || search[i + 1] === '_' || search[i + 1] === '^' || search[i + 1] === '$' || search[i + 1] === '#' || search[i + 1] === ':') {
                            array.push(current);
                            current = '';
                        }
                    }

                }
            }


            // console.log(array);

            var f_name = [];
            var l_name = [];
            var course = [];
            var age = [];
            var city = [];

            array.forEach((element) => {
                if (!sql.includes(' where ')) sql += ` where `;
                if (element.charAt(0) == '_') f_name.push(`f_name like '%${element.slice(1)}%'`);
                if (element.charAt(0) == '^') l_name.push(`l_name like '%${element.slice(1)}%'`);
                if (element.charAt(0) == '$') course.push(`course like '%${element.slice(1)}%'`);
                if (element.charAt(0) == '#') age.push(`age like '%${element.slice(1)}%'`);
                if (element.charAt(0) == ':') city.push(`city like '%${element.slice(1)}%'`);

            });

            if (f_name.length > 0) sql += f_name.join(" or ") + " and ";
            if (l_name.length > 0) sql += l_name.join(" or ") + " and ";
            if (course.length > 0) sql += course.join(" or ") + " and ";
            if (age.length > 0) sql += age.join(" or ") + " and ";
            if (city.length > 0) sql += city.join(" or ") + " and ";

            if (sql.includes('where')) sql = sql.slice(0, -5);

            con.query(sql, (err, result) => {
                if (err) throw err;
                res.render('search-with-delimiter/studentlist', { data: result });

            })

        } catch (err) {
            console.log(err);
        }

    });

    // _Adelle^Emanuel$B.TECH#23:Jammu
    // _Flory^Fiester$BE#28:Amreli

}

module.exports = route;