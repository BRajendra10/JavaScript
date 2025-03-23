let uname = document.getElementById('uname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let con_password = document.getElementById('con_password');
const btn = document.getElementById('btn');
let error = document.getElementById('error');

let state = true;

btn.addEventListener('click', () => {
    space_validation();

    if(state == false){
        alert("Every input field must be filled");
    }else{
        name_validation(uname.value);

        if(state == false){
            alert('numbers and special characters are not allowed in name');
        } else{
            email_validation(email.value);

            if(state == false){
                alert('Capital letters are not allowed and @gmail.com is required');
            } else{
                password_validation(password.value, con_password.value);

                if(state == false){
                    alert('password should have number, special characters and pasword and conform password should be euqale');
                } else{
                    alert('signup sucessfully');
                }
            }
        }
    }
});

function space_validation() {
    if(uname.value == '' || email.value == '' || password.value == '' || con_password.value == ''){
        state = false;
    } else {
        state = true;
    }
}

function name_validation(name) {
    if(/[0-9]/.test(name) || /[@#$%&*-+]/.test(name)){
        state = false;
    } else{
        state = true;
    }
}

function email_validation(eml) {
    let extension = "@gmail.com";
    if(/[A-Z]/.test(eml) || !eml.includes(extension)){
        state = false;
    } else{
        state = true;
    }
}

function password_validation(psrd, con_psrd) {
    if(/[0-9]/.test(psrd) && /[!@#$%&*-+]/.test(psrd) && psrd === con_psrd){
        state = true;
    } else{
        state = false;
    }
}