'use strict';

function createForm() {
    //get body
    var elBody = document.querySelector('body');

    //create h1
    var elH1 = document.createElement('h1');
    elH1.innerHTML = 'Enter your informations';

    //create form
    var elForm = document.createElement('form');
    
    //create input text
    var elLabelName = document.createElement('label');
    elLabelName.style.marginTop = '20px';
    elLabelName.style.display = 'block';
    elLabelName.innerText = 'Enter your name here';
    elLabelName.setAttribute('for', 'name');
    //create p (display errors)
    var elPname = document.createElement('p');
    elPname.setAttribute('id', 'pname');
    elPname.style.color = 'red';
    var elInputName = document.createElement('input');
    elInputName.setAttribute('type', 'text');
    elInputName.setAttribute('id', 'name');
    elInputName.style.display = 'block';

    //create input text
    var elLabelSurname = document.createElement('label');
    elLabelSurname.style.marginTop = '20px';
    elLabelSurname.style.display = 'block';
    elLabelSurname.innerText = 'Enter your surname here';
    elLabelSurname.setAttribute('for', 'surname');
    //create p (display errors)
    var elPsurname = document.createElement('p');
    elPsurname.setAttribute('id', 'psurname');
    elPsurname.style.color = 'red';
    var elInputSurname = document.createElement('input');
    elInputSurname.setAttribute('type', 'text');
    elInputSurname.setAttribute('id', 'surname');
    elInputSurname.style.display = 'block';

    //create input text
    var elLabelMail = document.createElement('label');
    elLabelMail.style.marginTop = '20px';
    elLabelMail.style.display = 'block';
    elLabelMail.innerText = 'Enter your mail here';
    elLabelMail.setAttribute('for', 'mail');
    //create p (display errors)
    var elPmail = document.createElement('p');
    elPmail.setAttribute('id', 'pmail');
    elPmail.style.color = 'red';
    var elInputMail = document.createElement('input');
    elInputMail.setAttribute('type', 'text');
    elInputMail.setAttribute('id', 'mail');
    elInputMail.style.display = 'block';

    //create input text (passw)
    var elLabelPass = document.createElement('label');
    elLabelPass.style.marginTop = '20px';
    elLabelPass.style.display = 'block';
    elLabelPass.innerText = 'Enter a password with at least 1 maj, 1min, 1 number and 1 special char.'; 
    elLabelPass.setAttribute('for', 'pass');
    //create p (display errors)
    var elPpass = document.createElement('p');
    elPpass.setAttribute('id', 'ppass');
    elPpass.style.color = 'red';    
    var elInputPass = document.createElement('input');
    elInputPass.style.marginBottom = '3px';
    elInputPass.setAttribute('type', 'password');
    elInputPass.setAttribute('id', 'pass');
    elInputPass.style.display = 'block';

    //create button
    var elButton = document.createElement('td');
    elButton.style.border = 'thick double';
    elButton.style.width = '70px';
    elButton.style.textAlign = 'center';
    elButton.style.height = '30px';
    elButton.innerText = 'Submit';
    

    //appendchild all
    elBody.appendChild(elH1);
    elForm.appendChild(elLabelName);
    elForm.appendChild(elPname);
    elForm.appendChild(elInputName);
    elForm.appendChild(elLabelSurname);
    elForm.appendChild(elPsurname);
    elForm.appendChild(elInputSurname);
    elForm.appendChild(elLabelMail);
    elForm.appendChild(elPmail);
    elForm.appendChild(elInputMail);
    elForm.appendChild(elLabelPass);
    elForm.appendChild(elPpass);
    elForm.appendChild(elInputPass);
    elForm.appendChild(elButton);
    elBody.appendChild(elForm);

    //add event on click
    elButton.addEventListener('click', function() {verify()}, false);

}

function verify() {

    //get inputs values
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var mail = document.getElementById("mail").value
    var pass = document.getElementById("pass").value

    //get erroring p
    var pname = document.getElementById("pname")
    var psurname = document.getElementById("psurname")
    var pmail = document.getElementById("pmail")
    var ppass = document.getElementById("ppass")

    //create regexes
    var nameReg = new RegExp('^[A-Za-z\s-ÏÖÄÂÁÀÉÈéèêôîïöäâáà]+$');
    var mailReg = new RegExp('^([a-zA-ZÀ-ÿ0-9_\.\-])+\@(([a-zA-ZÀ-ÿ0-9\-])+\\.)+([a-zA-ZÀ-ÿ0-9]{2,4})+$');
    var passReg = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-zÀ-ÿ\\d@$!%*?&]{8,}$');

    //verify name
    if (name != '') {
        if (nameReg.exec(name)) {
            pname.innerText = '';
        } else {
            pname.innerText = 'Invalid name';
        }
    } else {
        pname.innerText = 'Empty name';
    }

    //verify surname
    if (surname != '') {
        if (nameReg.exec(surname)) {
            psurname.innerText = '';
        } else {
            psurname.innerText = 'invalid surname';
        }
    } else {
        psurname.innerText = 'Empty surname';
    }

    //verify mail
    if (mail != '') {
        if (mailReg.exec(mail)) {
            pmail.innerText = '';
        } else {
            pmail.innerText = 'Invalid mail';
        }
    } else {
        pmail.innerText = 'Empty mail';
    }

    //verify password
    if (pass != '') {
        if (passReg.exec(pass)) {
            ppass.innerText = '';
        } else {
            ppass.innerText = 'Invalid pass';
        }
    } else {
        ppass.innerText = 'Empty pass';
    }
}

createForm();