

function validatedata() {
    // ..............................................basic details ........................................................

    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var designation = document.getElementById('designation').value;
    var current_add = document.getElementById('current_add').value;
    var perment_add = document.getElementById('perment_add ').value;
    var email = document.getElementById('email').value;
    var phone_no = document.getElementById('phone_no').value;
    var city = document.getElementById('city').value;
    var relationship_status = document.getElementById('relationship_status').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var state = document.getElementById('state').value;
    var zip_code = document.getElementById('zip_code').value;
    var birth_date = document.getElementById('birth_date').value;



    document.getElementById('errname').innerHTML = '';
    document.getElementById('errlname').innerHTML = '';
    document.getElementById('errdesig').innerHTML = '';
    document.getElementById('errcurr').innerHTML = '';
    document.getElementById('errper').innerHTML = '';
    document.getElementById('erremail').innerHTML = '';
    document.getElementById('errphone').innerHTML = '';
    document.getElementById('errcity').innerHTML = '';
    document.getElementById('errreleation').innerHTML = '';
    document.getElementById('errgender').innerHTML = '';
    document.getElementById('errstate').innerHTML = '';
    document.getElementById('errzip').innerHTML = '';
    document.getElementById('errdob').innerHTML = '';



    var isvalid = true;

    if (first_name === '') {
        errname.innerHTML = 'name is required*';
        isvalid = false;
    }
    else if (!/^[a-zA-Z]+$/.test(first_name)) {
        errname.innerHTML = 'only contain letters';
        isvalid = false;
    }
    if (last_name === '') {
        errlname.innerHTML = 'name is required*';
        isvalid = false;
    }
    else if (!/^[a-zA-Z]+$/.test(last_name)) {
        errlname.innerHTML = 'only contain letters';
        isvalid = false;
    }

    if (designation === '') {
        errdesig.innerHTML = 'required feild';
        isvalid = false;
    }

    if (current_add === '') {
        errcurr.innerHTML = 'required feild';
        isvalid = false;
    }

    if (perment_add === '') {
        errper.innerHTML = 'required feild';
        isvalid = false;
    }
    if (email === '') {
        erremail.innerHTML = ' email is required';
        isvalid = false;
    }
    else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        erremail.innerHTML = 'enter your valid email';
        isvalid = false;
    }
    if (phone_no === '') {
        errphone.innerHTML = 'phone no is required';
        isvalid = false;
    }
    else if (!/^\d{10}$/.test(phone_no)) {
        errphone.innerHTML = 'enter your valid number';
        isvalid = false;
    }
    if (city === '') {
        errcity.innerHTML = 'enter your city';
        isvalid = false;
    }
    if (relationship_status === '') {
        errreleation.innerHTML = 'select any one option';
        isvalid = false;
    }
    if (!gender) {
        errgender.innerHTML = 'select any one option';
        isvalid = false;
    }

    if (state === '') {
        errstate.innerHTML = 'enter your state';
        isvalid = false;
    }

    if (zip_code === '') {
        errzip.innerHTML = 'zip-code is required';
        isvalid = false;
    } else if (!/^\d{6}$/.test(zip_code)) {
        errzip.innerHTML = 'enter your valid zip-code';
        isvalid = false;
    }

    if (birth_date === '') {
        errdob.innerHTML = 'birth-date is required';
        isvalid = false;
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(birth_date)) {
        errdob.innerHTML = 'enter your valid birthdate';
        isvalid = false;
    }

    // ............................................................. education...........................................

    var education_type = document.getElementById('education_type').value;
    document.getElementById('erredutype').innerHTML = '';
    if (education_type === '') {
        erredutype.innerHTML = 'enter your education-type';
        isvalid = false;
    }


    var nameboard = document.getElementById('nameboard').value;
    document.getElementById('errboard').innerHTML = '';
    if (nameboard == '') {
        errboard.innerHTML = 'field is require';
        isvalid = false;
    }

    var passyear = document.getElementById('passyear').value;
    document.getElementById('erryear').innerHTML = '';
    if (passyear == '') {
        erryear.innerHTML = 'field is require';
        isvalid = false;
    } else if (!/^\d{4}$/.test(passyear)) {
        erryear.innerHTML = 'enter your valid year';
        isvalid = false;
    }

    var percentage = document.getElementById('percentage').value;
    document.getElementById('errpertage').innerHTML = '';
    if (percentage == '') {
        errpertage.innerHTML = 'field is require';
        isvalid = false;
    }
    // else if (!/^100(\.(0){0,2})?$|^([1-9]?[0-9])(\.(\d{0,2}))?\%$/.test('percentage')) {
    //     errpertage.innerHTML = 'input valid detail';
    //     isvalid = false;
    // }


    // ........................................ work experiance .............................

    var company_name = document.getElementById('company_name').value;
    document.getElementById('errcompany').innerHTML = '';
    if (company_name == '') {
        errcompany.innerHTML = 'field is require';
        isvalid = false;
    }

    var comdesg = document.getElementById('comdesg').value;
    document.getElementById('errcodesg').innerHTML = '';
    if (comdesg == '') {
        errcodesg.innerHTML = 'field is require';
        isvalid = false;
    }


    var from_date = document.getElementById('from_date').value;
    document.getElementById('errfrom').innerHTML = '';
    if (from_date === '') {
        errfrom.innerHTML = 'date is required';
        isvalid = false;
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(from_date)) {
        errfrom.innerHTML = 'enter your valid date';
        isvalid = false;
    }

    var to_date = document.getElementById('to_date').value;
    document.getElementById('errto').innerHTML = '';
    if (to_date === '') {
        errto.innerHTML = 'date is required';
        isvalid = false;
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(to_date)) {
        errto.innerHTML = 'enter your valid date';
        isvalid = false;
    }


    // ...................................... language known .............................

    var hindi = document.querySelectorAll('input[name="hindi"]:checked');
    document.getElementById('errlang').innerHTML = '';
    if (hindi.length === 0) {
        errlang.innerHTML = 'select any option';
        isvalid = false;
    }
    // else if ()





    // var op1 = document.querySelectorAll('input[name="op1"]:checked');
    // document.getElementById('errop1').innerHTML = '';
    // if (op1.length === 0) {
    //     errop1.innerHTML = 'select any option';
    //     isvalid = false;
    // }

    // var op2 = document.querySelectorAll('input[name="op2"]:checked');
    // document.getElementById('errop2').innerHTML = '';
    // if (op2.length === 0) {
    //     errop2.innerHTML = 'select any option';
    //     isvalid = false;
    // }

    // var op1 = document.querySelectorAll('input[name="op1"]:checked');
    // document.getElementById('errop1').innerHTML = '';
    // if (op1.length === 0) {
    //     errop1.innerHTML = 'select any option';
    //     isvalid = false;
    // }

    // var lang = document.querySelectorAll('input[name="lang"]:checked');
    // document.getElementById('errlang').innerHTML = '';
    // if (lang.length === 0) {
    //     errlang.innerHTML = 'select any option';
    //     isvalid = false;
    // }
    // else if (op1.length === '') {
    //     // errop1.innerHTML = 'select any option';
    //     isvalid = false;
    // }


    // .............................................refernce contact ................................


    var refname = document.getElementById('refname').value;
    document.getElementById('errref').innerHTML = '';
    if (refname === '') {
        errref.innerHTML = 'field is require';
        isvalid = false;
    }


    var refno = document.getElementById('refno').value;
    document.getElementById('errnum').innerHTML = '';
    if (refno === '') {
        errnum.innerHTML = 'field is require';
        isvalid = false;
    }

    var refrelation = document.getElementById('refrelation').value;
    document.getElementById('errel').innerHTML = '';
    if (refrelation === '') {
        errel.innerHTML = 'field is require';
        isvalid = false;
    }

    // ...........................................................prefernces.................................


    var location = document.getElementById('location').value;
    document.getElementById('errloc').innerHTML = '';
    if (location === '') {
        errloc.innerHTML = 'select any one';
        isvalid = false;
    }


    var department = document.getElementById('department').value;
    document.getElementById('errdep').innerHTML = '';
    if (department === '') {
        errdep.innerHTML = 'select any one';
        isvalid = false;
    }


    return isvalid;

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


// ...........education-master...................

education = 1;
function plusedu() {
    edurow = document.getElementsByClassName('edurow')[0];
    edurow.innerHTML +=
        `<div class="education">
                          <label for="etype">education:</label>
                        <select name="education_type[]" id="education_type">
                             <option value="">Select One</option>
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