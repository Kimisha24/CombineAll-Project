const con = require('../../combinedb');

const getjobformajax = function (req, res) {
    try {
        res.render('job-with-ajax/jobform');
    } catch (err) {
        console.log(err);
    }
}

const postsubmitajax = async (req, res) => {
    var { first_name, last_name, designation, current_add, perment_add, email, phone_no, city, state, zip_code, gender, relationship_status, birth_date } = req.body;
    var { education_type, nameboard, passyear, percentage } = req.body
    var { company_name, comdesg, from_date, to_date } = req.body;
    var { refname, refno, refrelation } = req.body;
    var { hindi, r_hindi, w_hindi, s_hindi, english, r_eng, w_eng, s_eng, gujrati, r_guj, w_guj, s_guj } = req.body;
    var { php, mysql, laravel, oracle, tech_oracle, tech_php, tech_mysql, tech_laravel } = req.body;
    var { location, department, noticeperiod, expactedctc, currentctc } = req.body;

    let sql = `select option_master.o_id,option_master.select_id,option_master.option_key from select_master inner join option_master on select_master.select_id = option_master.select_id;`
    let result = await con.promise().query(sql);
    // console.log(result[0]);

    result[0].forEach(data => {
        if (data.option_key == 'male' && gender == 'male') gender = data.o_id;
        if (data.option_key == 'female' && gender == 'female') gender = data.o_id;
        if (data.option_key == 'married' && relationship_status == 'married') relationship_status = data.o_id;
        if (data.option_key == 'unmarried' && relationship_status == 'unmarried') relationship_status = data.o_id;

        if (data.option_key == 'hindi' && hindi == 'hindi') hindi = data.o_id;
        if (data.option_key == 'english' && english == 'english') english = data.o_id;
        if (data.option_key == 'gujrati' && gujrati == 'gujrati') gujrati = data.o_id;

        if (data.option_key == 'php' && php == 'php') php = data.o_id;
        if (data.option_key == 'mysql' && mysql == 'mysql') mysql = data.o_id;
        if (data.option_key == 'laravel' && laravel == 'laravel') laravel = data.o_id;
        if (data.option_key == 'oracle' && oracle == 'oracle') oracle = data.o_id;

        if (data.option_key == 'beginer' && tech_php == 'beginer') tech_php = data.o_id;
        if (data.option_key == 'mideator' && tech_php == 'mideator') tech_php = data.o_id;
        if (data.option_key == 'expert' && tech_php == 'expert') tech_php = data.o_id;

        if (data.option_key == 'beginer' && tech_mysql == 'beginer') tech_mysql = data.o_id;
        if (data.option_key == 'mideator' && tech_mysql == 'mideator') tech_mysql = data.o_id;
        if (data.option_key == 'expert' && tech_mysql == 'expert') tech_mysql = data.o_id;

        if (data.option_key == 'beginer' && tech_laravel == 'beginer') tech_laravel = data.o_id;
        if (data.option_key == 'mideator' && tech_laravel == 'mideator') tech_laravel = data.o_id;
        if (data.option_key == 'expert' && tech_laravel == 'expert') tech_laravel = data.o_id;

        if (data.option_key == 'beginer' && tech_oracle == 'beginer') tech_oracle = data.o_id;
        if (data.option_key == 'mideator' && tech_oracle == 'mideator') tech_oracle = data.o_id;
        if (data.option_key == 'expert' && tech_oracle == 'expert') tech_oracle = data.o_id;
    });

    // insert basic detail..
    var id = 0;
    var sqldetail = `insert into basic_detail(first_name,last_name,designation,current_add,perment_add,email,phone_no,city,state,zip_code,gender,relationship_status,birth_date) values (?,?,?,?,?,?,?,?,?,?,?,?,?);`
    var details = await con.promise().query(sqldetail, [first_name, last_name, designation, current_add, perment_add, email, phone_no, city, state, zip_code, gender, relationship_status, birth_date]);

    id = details[0].insertId;
    console.log(id);
    console.log(req.body);

    // insert education-master..
    var sqledu = `insert into education_master(id,education_type,Name_board,Passing_year,Percentage) values (?,?,?,?,?);`
    for (let i = 0; i < education_type.length; i++) {
        await con.promise().query(sqledu, [id, education_type[i], nameboard[i], passyear[i], percentage[i]]);
    }

    // insert work-experience
    var sqlwork = `insert into work_experience (id,company_name,comdesg,from_date,to_date) values (?,?,?,?,?);`
    for (let i = 0; i < company_name.length; i++) {
        await con.promise().query(sqlwork, [id, company_name[i], comdesg[i], from_date[i], to_date[i]]);
    }

    // insert refrances
    let sqlref = `insert into ref_contact (id,refname,refno,refrelation) values (?,?,?,?);`
    for (let i = 0; i < refname.length; i++) {
        await con.promise().query(sqlref, [id, refname[i], refno[i], refrelation[i]]);
    }

    //  insert prefernces
    var sqlpref = `insert into preferances (id,location,department,notice_period,expacted_ctc,current_ctc) values (?,?,?,?,?,?);`
    await con.promise().query(sqlpref, [id, location, department, noticeperiod, expactedctc, currentctc]);

    // insert language
    var sqllang = `insert into language_known(id,lang_known,read_,write_,speak_) values (?,?,?,?,?);`
    if (hindi) {
        if (r_hindi == 'read') { r_hindi = 1 } else { r_hindi = 0 }
        if (w_hindi == 'write') { w_hindi = 1 } else { w_hindi = 0 }
        if (s_hindi == 'speak') { s_hindi = 1 } else { s_hindi = 0 }
        await con.promise().query(sqllang, [id, hindi, r_hindi, w_hindi, s_hindi]);
    }
    if (english) {
        if (r_eng == 'read') { r_eng = 1 } else { r_eng = 0 }
        if (w_eng == 'write') { w_eng = 1 } else { w_eng = 0 }
        if (s_eng == 'speak') { s_eng = 1 } else { s_eng = 0 }
        await con.promise().query(sqllang, [id, english, r_eng, w_eng, s_eng]);
    }
    if (gujrati) {
        if (r_guj == 'read') { r_guj = 1 } else { r_guj = 0 }
        if (w_guj == 'write') { w_guj = 1 } else { w_guj = 0 }
        if (s_guj == 'speak') { s_guj = 1 } else { s_guj = 0 }
        await con.promise().query(sqllang, [id, gujrati, r_guj, w_guj, s_guj]);
    }

    // insert technology
    var sqltech = `insert into technologies (id,tech_lang,tech_level) values (?,?,?);`;
    if (php) await con.promise().query(sqltech, [id, php, tech_php]);
    if (mysql) await con.promise().query(sqltech, [id, mysql, tech_mysql]);
    if (laravel) await con.promise().query(sqltech, [id, laravel, tech_laravel]);
    if (oracle) await con.promise().query(sqltech, [id, oracle, tech_oracle]);
}

const editformajax = async (req, res) => {
    const id = req.params.id;
    upbasic = `select * from basic_detail where id = ${id}`;
    let up = await con.promise().query(upbasic);
    result = up[0][0];
    // console.log(result);

    upedu = `select * from education_master where id = ${id}`;
    let up1 = await con.promise().query(upedu);
    result1 = up1[0];
    //console.log(result1);-

    upwork = `select * from work_experience where id = ${id}`;
    let up2 = await con.promise().query(upwork);
    result2 = up2[0];
    //console.log(result2);

    upref = `select * from ref_contact where id = ${id}`;
    let up3 = await con.promise().query(upref);
    result3 = up3[0];
    //console.log(result3);

    uppre = `select * from preferances where id = ${id}`;
    let up4 = await con.promise().query(uppre);
    result4 = up4[0];
    //console.log(result4);

    uplang = `select * from language_known where id = ${id}`;
    let up5 = await con.promise().query(uplang);
    result5 = up5[0];
    // console.log(result5)

    var php = []; var mysql = []; var laravel = []; var oracle = [];
    uptech = `select * from technologies where id = ${id}`;
    let up6 = await con.promise().query(uptech);
    result6 = up6[0];
    // console.log(result6)

    result6.forEach(item => {
        if (item.tech_lang == 11) php.push(item);
        if (item.tech_lang == 12) mysql.push(item);
        if (item.tech_lang == 13) laravel.push(item);
        if (item.tech_lang == 14) oracle.push(item);
    })
    res.render('job-with-ajax/edit', { result6, php, mysql, laravel, oracle });
}

const updateajaxform = async (req, res) => {
    const id = req.params.id;
    var { first_name, last_name, designation, current_add, perment_add, email, phone_no, city, state, zip_code, gender, relationship_status, birth_date } = req.body;
    var { education_type, nameboard, passyear, percentage, edu_id } = req.body
    var { company_name, comdesg, from_date, to_date, work_id } = req.body;
    var { refname, refno, refrelation, ref_id } = req.body;
    var { location, department, noticeperiod, expactedctc, currentctc } = req.body;
    var { hindi, r_hindi, w_hindi, s_hindi, english, r_eng, w_eng, s_eng, gujrati, r_guj, w_guj, s_guj, lang_id } = req.body;
    var { php, mysql, laravel, oracle, tech_oracle, tech_php, tech_mysql, tech_laravel, tech_id } = req.body;

    // join query for select-master and option-master...
    var sql = `select option_master.o_id,option_master.select_id,option_master.option_key from select_master inner join option_master on select_master.select_id = option_master.select_id;`
    var result = await con.promise().query(sql);
    result[0].forEach(data => {

        if (data.option_key == 'male' && gender == 'male') gender = data.o_id;
        if (data.option_key == 'female' && gender == 'female') gender = data.o_id;
        if (data.option_key == 'married' && relationship_status === 'married') relationship_status = data.o_id;
        if (data.option_key == 'unmarried' && relationship_status === 'unmarried') relationship_status = data.o_id;

        if (data.option_key == 'hindi' && hindi == 'hindi') hindi = data.o_id;
        if (data.option_key == 'english' && english == 'english') english = data.o_id;
        if (data.option_key == 'gujrati' && gujrati == 'gujrati') gujrati = data.o_id;

        if (data.option_key == 'php' && php == 'php') php = data.o_id;
        if (data.option_key == 'beginer' && tech_php === 'beginer') tech_php = data.o_id;
        if (data.option_key == 'mideator' && tech_php == 'mideator') tech_php = data.o_id;
        if (data.option_key == 'expert' && tech_php == 'expert') tech_php = data.o_id;

        if (data.option_key == 'mysql' && mysql == 'mysql') mysql = data.o_id;
        if (data.option_key == 'beginer' && tech_mysql == 'beginer') tech_mysql = data.o_id;
        if (data.option_key == 'mideator' && tech_mysql == 'mideator') tech_mysql = data.o_id;
        if (data.option_key == 'expert' && tech_mysql == 'expert') tech_mysql = data.o_id;

        if (data.option_key == 'laravel' && laravel == 'laravel') laravel = data.o_id;
        if (data.option_key == 'beginer' && tech_laravel == 'beginer') tech_laravel = data.o_id;
        if (data.option_key == 'mideator' && tech_laravel == 'mideator') tech_laravel = data.o_id;
        if (data.option_key == 'expert' && tech_laravel == 'expert') tech_laravel = data.o_id;

        if (data.option_key == 'oracle' && oracle == 'oracle') oracle = data.o_id;
        if (data.option_key == 'beginer' && tech_oracle == 'beginer') tech_oracle = data.o_id;
        if (data.option_key == 'mideator' && tech_oracle == 'mideator') tech_oracle = data.o_id;
        if (data.option_key == 'expert' && tech_oracle == 'expert') tech_oracle = data.o_id;
    })
    console.log(req.body);

    // update basic detail..........
    let updatedetail = `update basic_detail set first_name=?,last_name=?,designation=?,current_add=?,perment_add=?,email=?,phone_no=?,city=?,state=?,zip_code=?,gender=?,relationship_status=?,birth_date=? where id = ${id};`
    await con.promise().query(updatedetail, [first_name, last_name, designation, current_add, perment_add, email, phone_no, city, state, zip_code, gender, relationship_status, birth_date]);

    // update education detail.....
    let updateedu = `update education_master set education_type =?,Name_board=?,Passing_year=?,Percentage=? where id = ${id} and edu_id=?;`
    for (let i = 0; i < education_type.length; i++) {
        await con.promise().query(updateedu, [education_type[i], nameboard[i], passyear[i], percentage[i], edu_id[i]]);
    }

    // update work-experiance..
    let updatework = `update work_experience set company_name=?,comdesg=?,from_date=?,to_date=? where id = ${id} and work_id=?`
    for (let i = 0; i < company_name.length; i++) {
        await con.promise().query(updatework, [company_name[i], comdesg[i], from_date[i], to_date[i], work_id[i]]);
    }

    // update ref-contact...
    let updateref = `update ref_contact set refname=?,refno=?,refrelation=? where id = ${id} and ref_id=?;`
    for (let i = 0; i < refname.length; i++) {
        await con.promise().query(updateref, [refname[i], refno[i], refrelation[i], ref_id[i]]);
    }

    // update preferance..
    let updatepref = ` update preferances set location =?,department =?,notice_period =?,expacted_ctc =?,current_ctc=? where id= ${id};`
    await con.promise().query(updatepref, [location, department, noticeperiod, expactedctc, currentctc]);

    // update language..
    let updatelang = `update language_known set lang_known =?, read_ =?, write_ =?, speak_ =? where id=${id} and lang_id=? `
    if (hindi) {
        if (r_hindi == 'read') { r_hindi = 1 } else { r_hindi = 0 }
        if (w_hindi == 'write') { w_hindi = 1 } else { w_hindi = 0 }
        if (s_hindi == 'speak') { s_hindi = 1 } else { s_hindi = 0 }
        await con.promise().query(updatelang, [hindi, r_hindi, w_hindi, s_hindi, lang_id[0]]);
    }
    if (english) {
        if (r_eng == 'read') { r_eng = 1 } else { r_eng = 0 }
        if (w_eng == 'write') { w_eng = 1 } else { w_eng = 0 }
        if (s_eng == 'speak') { s_eng = 1 } else { s_eng = 0 }
        await con.promise().query(updatelang, [english, r_eng, w_eng, s_eng, lang_id[1]]);
    }
    if (gujrati) {
        if (r_guj == 'read') { r_guj = 1 } else { r_guj = 0 }
        if (w_guj == 'write') { w_guj = 1 } else { w_guj = 0 }
        if (s_guj == 'speak') { s_guj = 1 } else { s_guj = 0 }
        await con.promise().query(updatelang, [gujrati, r_guj, w_guj, s_guj, lang_id[2]]);
    }

    // update technology...
    var tech_id = req.body.tech_id;
    var updatetech = `update technologies set tech_lang=?,tech_level=? where id=${id} and tech_id=?;`;
    if (php) await con.promise().query(updatetech, [php, tech_php, tech_id[0]]);
    if (mysql) await con.promise().query(updatetech, [mysql, tech_mysql, tech_id[1]]);
    if (laravel) await con.promise().query(updatetech, [laravel, tech_laravel, tech_id[2]]);
    if (oracle) await con.promise().query(updatetech, [oracle, tech_oracle, tech_id[3]]);

    res.send('data updated');
}

module.exports = { getjobformajax, postsubmitajax, editformajax, updateajaxform }