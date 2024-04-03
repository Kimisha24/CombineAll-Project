var con = require('../combinedb');

function route(app) {

    app.get('/stu_attlist', (req, res) => {

        const p = req.query.page || 1;
        const offset = (p - 1) * 10;
        const lastpage = Math.ceil(200 / 10);
        const m = req.query.month || 'December';
        const year = req.query.year || '2023';

        // console.log(m);

        // sql = `select s.stu_id, s.f_name , monthname(a.date_of_month) as month , count(a.attendence) as present_days from student_details as s inner join attendence_master as a on s.stu_id = a.stu_id where a.attendence = "p" group by stu_id, month having month = "${m}"   order by stu_id limit 10 offset ${offset}`; 

        sql = `select any_value(s.stu_id)as stu_id, any_value(s.f_name) as f_name, monthname(a.date_of_month) as month , count(a.attendence) as present_days from student_details as s inner join attendence_master as a on any_value(s.stu_id) = any_value(a.stu_id) where any_value(a.attendence) = "p" and year(date_of_month) = ${year} group by any_value(stu_id), month having month = "${m}"  order by any_value(stu_id) limit 10 offset ${offset}`;

        con.query(sql, (err, result) => {
            if (err) throw err;
            res.render('stu-att-list/stu_attlist', { result, p, m, lastpage, year });
        })

    })

}


module.exports = route;