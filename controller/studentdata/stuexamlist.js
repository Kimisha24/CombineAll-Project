const con = require('../../combinedb');

const stuexamlist = (req, res) => {
    const p = req.query.page || 1;
    const offset = (p - 1) * 60;

    sql = `select  ANY_VALUE(e.stu_id) as "stu_id" ,ANY_VALUE(concat(s.f_name , " " , s.l_name)) as "stu_name",ANY_VALUE(t.exam_type) as "exam_type",sum(e.theory_obtain_mark) as "theory",sum(e.practical_obtain_mark) as "practical" from exam_result as e inner join student_details as s  on e.stu_id = s.stu_id inner join exam_type as t on e.type_id = t.type_id inner join subject_master as sub on e.sub_id = sub.sub_id group by t.type_id , s.stu_id order by s.stu_id limit 60 offset ${offset};`
    con.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result[0]);
        res.render('stu-exam-list/stu_exam_list', { result, p });
    })
}    

const stuviewdetails = (req, res) => {
    let id = req.query.id || 1;
    console.log(id)

    sql = ` select  any_value(s.stu_id) as stu_id ,concat(s.f_name , " " , s.l_name) as stu_name ,any_value(sub.sub_name) as sub_name ,any_value(e.type_id),e.practical_obtain_mark as practical,e.theory_obtain_mark as theory from student_details as s inner join exam_result as e  on e.stu_id = s.stu_id inner join subject_master as sub on sub.sub_id = e.sub_id  where e.stu_id = ${id};`;

    con.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.render('stu-exam-list/viewdetails', { result: result });
    });
}

const stuviewatt = (req, res) => {
    const stu_id = req.query.stu_id || 1;
    const m = req.query.month;
    const year = req.query.year;

    sql = `select any_value(s.stu_id) as stu_id, any_value(concat(s.f_name , " " , s.l_name)) as stu_name , any_value(count(s.stu_id)) as present_days from student_details as s , attendence_master as a where any_value(s.stu_id) = any_value(a.stu_id) and a.attendence = "p"  and s.stu_id = ${stu_id};`;

    con.query(sql, (err, result) => {
        if (err) throw err;
        res.render('stu-exam-list/view_att', { result, stu_id, m, year });
    })
}

module.exports = { stuexamlist, stuviewdetails, stuviewatt }
