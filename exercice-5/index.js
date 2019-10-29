'use strict';

function verify() {

    //get inputs values
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;

    //get erroring p
    var pname = document.getElementById("pname");
    var psurname = document.getElementById("psurname");
    var pmail = document.getElementById("pmail");
    var ppass = document.getElementById("ppass");

    //create regexes
    var nameReg = new RegExp('^[A-Za-zÀ-ÿ\s -]+$');
    var mailReg = new RegExp('^([a-zA-ZÀ-ÿ0-9_\.\-])+\@(([a-zA-ZÀ-ÿ0-9\-])+\\.)+([a-zA-ZÀ-ÿ0-9]{2,4})+$');
    var passReg = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-zÀ-ÿ\\d@$!%*+#=/\\_-?&]{8,}$');

    //verify name
    if (name != '') {
        if (nameReg.exec(name)) {
            pname.style.color = 'green';
            pname.innerText = 'Valid name';
        } else {
            pname.style.color = 'red';
            pname.innerText = 'Invalid name';
        }
    } else {
        pname.style.color = 'red';
        pname.innerText = 'Empty name';
    }

    //verify surname
    if (surname != '') {
        if (nameReg.exec(surname)) {
            psurname.style.color = 'green';
            psurname.innerText = 'Valid surname';
        } else {
            psurname.style.color = 'red';
            psurname.innerText = 'invalid surname';
        }
    } else {
        psurname.style.color = 'red';
        psurname.innerText = 'Empty surname';
    }

    //verify mail
    if (mail != '') {
        if (mailReg.exec(mail)) {
            pmail.style.color = 'green';
            pmail.innerText = 'Valid mail';
        } else {
            pmail.style.color = 'red';
            pmail.innerText = 'Invalid mail';
        }
    } else {
        pmail.style.color = 'red';
        pmail.innerText = 'Empty mail';
    }

    //verify password
    if (pass != '') {
        if (passReg.exec(pass)) {
            ppass.style.color = 'green';
            ppass.innerText = 'Valid password';
            
        } else {
            ppass.style.color = 'red';
            ppass.innerText = 'Invalid password';
        }
    } else {
        ppass.style.color = 'red';
        ppass.innerText = 'Empty pass';
    }
}
