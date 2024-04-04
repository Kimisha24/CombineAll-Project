
// ..... for prev-next page.....
var current_tab = 0;
showtab(current_tab);

function showtab(n) {
    tab = document.querySelectorAll('.tab');
    // console.log(tab);
    pre = document.querySelector('#pre');
    next = document.querySelector('#next');
    submit = document.querySelector('#submit');

    tab[n].style.display = 'block';
    // console.log(current_tab);

    if (n == 0) {
        pre.style.display = 'none';
    } else {
        pre.style.display = 'block';
    }
    if (n == (tab.length - 1)) {
        submit.style.display = 'block';
        next.style.display = 'none';
    } else {
        submit.style.display = 'none';
        next.style.display = 'block';

    }
}

function prevnext(n) {

    if (validatedata() != true) {
        return false;
    }
    var x = document.querySelectorAll('.tab');
    // if(n==1 && !validatedata()) return false;
    x[current_tab].style.display = 'none';
    current_tab = current_tab + n;
    showtab(current_tab);
    return true;
}

// .................. work script ....................

experience = 1;
function pluswork() {
    row = document.getElementsByClassName('row')[0];
    row.innerHTML +=
        `<div class="experience">
                        <label for="company_name"> Company name:</label>
                        <input type="text" name="company_name[]" id="company_name" />
                        <span id="errcompany"></span>
                        <label for="comdesg"> Designation: </label>
                        <input type="text" name="comdesg[]" id="comdesg" />
                        <span id="errcomdesg"></span>
                        <label for="from_date">From :</label>
                        <input type="text" id="from_date" name="from_date[]" />
                        <span id="errfrom"></span>
                        <label for="to_date">To :</label>
                        <input type="text" id="to_date" name="to_date[]">
                        <span id="errto"></span><br><br>
                    </div>`;

    experience++;
}

function minuswork() {
    if (experience > 1) {
        row = document.getElementsByClassName('row');
        row[0].removeChild(row[0].lastElementChild);
        experience--;
    }
}

// ...............referance script .................

referance = 1;
function plusref() {
    refrow = document.getElementsByClassName('refrow')[0];
    refrow.innerHTML +=
        ` <div class="referance">
                    <label for="name"> Name: </label>
                    <input type="text" name="refname[]" id="refname" />
                    <span id="errref"></span>
                    <label for="contactno"> Contact no: </label>
                    <input type="text" name="refno[]" id="refno" />
                    <span id="errnum"></span>
                    <label for="relation"> Relation :</label>
                    <input type="text" name="refrelation[]" id="refrelation" />
                    <span id="errel"></span><br><br>
                </div>`;
    referance++;
}

function minusref() {
    if (referance > 1) {
        refrow = document.getElementsByClassName('refrow');
        refrow[0].removeChild(refrow[0].lastElementChild);
        referance--;
    }
}

// .........................education script .....................

education = 1;
function plusedu() {
    edurow = document.getElementsByClassName('edurow')[0];
    edurow.innerHTML +=
        `<div class="education">
                          <label for="etype">education:</label>
                        <select name="education_type[]" id="education_type">
                            <option value="ssc" name="ssc[]">ssc</option>
                            <option value="hsc" name="hsc[]">hsc</option>
                            <option value="bachelor" name="bachelor[]">bachelor</option>
                            <option value="master" name="master[]">master</option>
                        </select>
                        <label for="nameboard"> Name of board :</label>
                        <input type="text" name="nameboard[]" id="nameboard" />
                        <span id="errssc"></span>

                        <label for="passyear"> Passing year :</label>
                        <input type="text" name="passyear[]" id="passyear" />
                        <span id="errsscpy"></span>

                        <label for="percentage"> Percentage :</label>
                        <input type="text" name="percentage[]" id="percentage" />
                        <span id="errsscper"></span> <br> <br>
                    </div>`;
    education++;
}

function minusedu() {
    if (education > 1) {
        edurow = document.getElementsByClassName('edurow');
        edurow[0].removeChild(edurow[0].lastElementChild);
        education--;
    }
}

// for submitform....
async function submitdata() {
    let formdata = document.getElementById('regform');
    let data = new FormData(formdata);
    const params = new URLSearchParams(data);
    // console.log(params);
    const jobdata = await new Response(params).text();
    // console.log(typeof (jobdata));

    const data2 = await fetch('http://localhost:8001/form-submit', {
        method: 'post',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: jobdata
    })
    result = await data2.json();
    document.getElementById('message').innerHTML = result.msg;
}


function validatedata() {

    // ......................basic details ...............................

    if (current_tab === 0) {

        var first_name = document.getElementById('first_name').value;
        document.getElementById('errname').innerHTML = '';
        if (first_name === '') {
            errname.innerHTML = 'name is required*';
            return false;
        }
        else if (!/^[a-zA-Z]+$/.test(first_name)) {
            errname.innerHTML = 'only contain letters';
            return false;
        }

        var last_name = document.getElementById('last_name').value;
        document.getElementById('errlname').innerHTML = '';
        if (last_name === '') {
            errlname.innerHTML = 'name is required*';
            return false;
        }
        else if (!/^[a-zA-Z]+$/.test(last_name)) {
            errlname.innerHTML = 'only contain letters';
            return false;
        }

        var designation = document.getElementById('designation').value;
        document.getElementById('errdesig').innerHTML = '';
        if (designation === '') {
            errdesig.innerHTML = 'required feild';
            return false;
        }

        var current_add = document.getElementById('current_add').value;
        document.getElementById('errcurr').innerHTML = '';
        if (current_add === '') {
            errcurr.innerHTML = 'required feild';
            return false;
        }

        var perment_add = document.getElementById('perment_add ').value;
        document.getElementById('errper').innerHTML = '';
        if (perment_add === '') {
            errper.innerHTML = 'required feild';
            return false;
        }

        var city = document.getElementById('city').value;
        document.getElementById('errcity').innerHTML = '';
        if (city === '') {
            errcity.innerHTML = 'enter your city';
            return false;
        }

        var zip_code = document.getElementById('zip_code').value;
        document.getElementById('errzip').innerHTML = '';
        if (zip_code === '') {
            errzip.innerHTML = 'zip-code is required';
            return false;
        } else if (!/^\d{6}$/.test(zip_code)) {
            errzip.innerHTML = 'enter your valid zip-code';
            return false;
        }

        var state = document.getElementById('state').value;
        document.getElementById('errstate').innerHTML = '';
        if (state === '') {
            errstate.innerHTML = 'enter your state';
            return false;
        }

        var email = document.getElementById('email').value;
        document.getElementById('erremail').innerHTML = '';
        if (email === '') {
            erremail.innerHTML = ' email is required';
            return false;
        }
        else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            erremail.innerHTML = 'enter your valid email';
            return false;
        }

        var phone_no = document.getElementById('phone_no').value;
        document.getElementById('errphone').innerHTML = '';
        if (phone_no === '') {
            errphone.innerHTML = 'phone no is required';
            return false;
        }
        else if (!/^\d{10}$/.test(phone_no)) {
            errphone.innerHTML = 'enter your valid number';
            return false;
        }

        var gender = document.querySelector('input[name="gender"]:checked');
        document.getElementById('errgen').innerHTML = '';
        if (!gender) {
            errgen.innerHTML = 'select any one option';
            return false;
        }

        var relationship_status = document.getElementById('relationship_status').value;
        document.getElementById('errreleation').innerHTML = '';
        if (relationship_status === '') {
            errreleation.innerHTML = 'select any one option';
            return false;
        }

        var birth_date = document.getElementById('birth_date').value;
        document.getElementById('errdob').innerHTML = '';
        if (birth_date === '') {
            errdob.innerHTML = 'birth-date is required';
            return false;
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(birth_date)) {
            errdob.innerHTML = 'enter your valid birthdate';
            return false;
        }


    }
    //.......... for education ................

    if (current_tab === 1) {

        var education_type = document.getElementById('education_type').value;
        document.getElementById('erredutype').innerHTML = '';
        if (education_type === '') {
            erredutype.innerHTML = 'enter your education-type';
            return false;
        }


        var nameboard = document.getElementById('nameboard').value;
        document.getElementById('errboard').innerHTML = '';
        if (nameboard == '') {
            errboard.innerHTML = 'field is require';
            return false;
        }

        var passyear = document.getElementById('passyear').value;
        document.getElementById('erryear').innerHTML = '';
        if (passyear == '') {
            erryear.innerHTML = 'field is require';
            return false;
        } else if (!/^\d{4}$/.test(passyear)) {
            erryear.innerHTML = 'enter your valid year';
            return false;
        }

        var percentage = document.getElementById('percentage').value;
        document.getElementById('errpertage').innerHTML = '';
        if (percentage == '') {
            errpertage.innerHTML = 'field is require';
            return false;
        }
        // else if (!/^100(\.(0){0,2})?$|^([1-9]?[0-9])(\.(\d{0,2}))?\%$/.test('percentage')) {
        //     errpertage.innerHTML = 'input valid detail';
        //     return false;
        // }

    }

    // .................. work experiance .............

    if (current_tab === 2) {
        var company_name = document.getElementById('company_name').value;
        document.getElementById('errcompany').innerHTML = '';
        if (company_name == '') {
            errcompany.innerHTML = 'field is require';
            return false;
        }

        var comdesg = document.getElementById('comdesg').value;
        document.getElementById('errcodesg').innerHTML = '';
        if (comdesg == '') {
            errcodesg.innerHTML = 'field is require';
            return false;
        }


        var from_date = document.getElementById('from_date').value;
        document.getElementById('errfrom').innerHTML = '';
        if (from_date === '') {
            errfrom.innerHTML = 'date is required';
            return false;
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(from_date)) {
            errfrom.innerHTML = 'enter your valid date';
            return false;
        }

        var to_date = document.getElementById('to_date').value;
        document.getElementById('errto').innerHTML = '';
        if (to_date === '') {
            errto.innerHTML = 'date is required';
            return false;
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(to_date)) {
            errto.innerHTML = 'enter your valid date';
            return false;
        }
    }

    //................. for language ..............
    if (current_tab === 3) {
        let hindi = document.getElementById('hindi');
        let op1 = document.getElementById('op1');
        let op2 = document.getElementById('op2');
        let op3 = document.getElementById('op3');

        if (hindi.checked == true &&
            op1.checked == false &&
            op2.checked == false &&
            op3.checked == false) {

            let errlang = document.getElementById('errop1');
            errlang.innerHTML = 'select any option of hindi';
            return false;
        }
        else if (
            op1.checked == true ||
            op2.checked == true ||
            op3.checked == true
        ) {
            hindi.checked = true;
        }

        let english = document.getElementById('english');
        let op4 = document.getElementById('op4');
        let op5 = document.getElementById('op5');
        let op6 = document.getElementById('op6');

        if (english.checked == true &&
            op4.checked == false &&
            op5.checked == false &&
            op6.checked == false) {
            let errlang = document.getElementById('errop2');
            errlang.innerHTML = 'select any option of english';
            return false;
        }
        else if (
            op4.checked == true ||
            op5.checked == true ||
            op6.checked == true
        ) {
            english.checked = true;
        }

        let gujrati = document.getElementById('gujrati');
        let op7 = document.getElementById('op7');
        let op8 = document.getElementById('op8');
        let op9 = document.getElementById('op9');

        if (gujrati.checked == true &&
            op7.checked == false &&
            op8.checked == false &&
            op9.checked == false) {
            let errlang = document.getElementById('errop3');
            errlang.innerHTML = 'select any option of Gujrati';
            return false;
        }
        else if (
            op7.checked == true ||
            op8.checked == true ||
            op9.checked == true
        ) {
            gujrati.checked = true;
        }
    }

    // ....... for technology ............

    if (current_tab === 4) {

        let php = document.getElementById('php');
        let tech1 = document.getElementById('tech1');
        let tech2 = document.getElementById('tech2');
        let tech3 = document.getElementById('tech3');

        if (php.checked == true &&
            tech1.checked == false &&
            tech2.checked == false &&
            tech3.checked == false) {
            let errphp = document.getElementById('errphp');
            errphp.innerHTML = 'select any option of Php';
            return false;
        }
        else if (
            tech1.checked == true ||
            tech2.checked == true ||
            tech3.checked == true
        ) {
            php.checked = true;

        }

        let mysql = document.getElementById('mysql');
        let tech4 = document.getElementById('tech4');
        let tech5 = document.getElementById('tech5');
        let tech6 = document.getElementById('tech6');

        if (mysql.checked == true &&
            tech4.checked == false &&
            tech5.checked == false &&
            tech6.checked == false) {
            let errmysql = document.getElementById('errmysql');
            errmysql.innerHTML = 'select any option of mysql';
            return false;
        }
        else if (
            tech4.checked == true ||
            tech5.checked == true ||
            tech6.checked == true
        ) {
            mysql.checked = true;

        }

        let laravel = document.getElementById('laravel');
        let tech7 = document.getElementById('tech7');
        let tech8 = document.getElementById('tech8');
        let tech9 = document.getElementById('tech9');

        if (laravel.checked == true &&
            tech7.checked == false &&
            tech8.checked == false &&
            tech9.checked == false) {
            let errlaravel = document.getElementById('errlaravel');
            errlaravel.innerHTML = 'select any option of laravel';
            return false;
        }
        else if (
            tech7.checked == true ||
            tech8.checked == true ||
            tech9.checked == true
        ) {
            laravel.checked = true;
        }

        let oracle = document.getElementById('oracle');
        let tech10 = document.getElementById('tech10');
        let tech11 = document.getElementById('tech11');
        let tech12 = document.getElementById('tech12');

        if (oracle.checked == true &&
            tech10.checked == false &&
            tech11.checked == false &&
            tech12.checked == false) {
            let erroracle = document.getElementById('erroracle');
            erroracle.innerHTML = 'select any option of oracle';
            return false;
        }
        else if (
            tech10.checked == true ||
            tech11.checked == true ||
            tech12.checked == true
        ) {
            oracle.checked = true;
        }


    }

    // .......... refernce contact ...........

    if (current_tab === 5) {
        var refname = document.getElementById('refname').value;
        document.getElementById('errref').innerHTML = '';
        if (refname === '') {
            errref.innerHTML = 'field is require';
            return false;
        }


        var refno = document.getElementById('refno').value;
        document.getElementById('errnum').innerHTML = '';
        if (refno === '') {
            errnum.innerHTML = 'field is require';
            return false;
        }

        var refrelation = document.getElementById('refrelation').value;
        document.getElementById('errel').innerHTML = '';
        if (refrelation === '') {
            errel.innerHTML = 'field is require';
            return false;
        }
    }
    // // ...........prefernces...........

    if (current_tab === 6) {
        var location = document.getElementById('location').value;
        document.getElementById('errloc').innerHTML = '';
        if (location === '') {
            errloc.innerHTML = 'select any one';
            return false;
        }


        var department = document.getElementById('department').value;
        document.getElementById('errdep').innerHTML = '';
        if (department === '') {
            errdep.innerHTML = 'select any one';
            return false;
        }
    }

    return true;
}




// script for updateform using ajax..
// async function updatedata() {
//     let formdata = document.getElementById('updata');
//     let data = new FormData(formdata);
//     const params = new URLSearchParams(data);
//     // console.log(params);
//     const jobdata = await new Response(params).text();
//     // console.log(typeof (jobdata));

//     console.log('data updated..');

//     await fetch("http://localhost:8082/edit/<%=result.id%>/update", {
//         method: 'post',
//         headers: {
//             'Content-type': 'application/x-www-form-urlencoded'
//         },
//         body: jobdata
//     });
// }
