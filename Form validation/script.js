let uname = document.getElementById('uname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let con_password = document.getElementById('con-password');

const btn = document.getElementById('btn');
let error = document.getElementById('error');

let state = 'sucess';
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/', '!', '@', '#', '$', '&'];

btn.addEventListener('click', () => {
    let name_val = space_validation();

    if(name_val == 'no sucess'){
        error.innerHTML = 'every input field must be filled';
    }else{
        let name_val = name_validation(uname.value);

        if(name_val == 'no sucess'){
            error.innerHTML = 'numbers and special characters are not allowed in name';
        } else{
            let email_val = email_validation(email.value, email.value.toUpperCase());

            if(email_val == 'no sucess'){
                error.innerHTML = 'capital letters are not allowed and @gmail.com necessary in email'
            } else{
                let password_val = password_validation(password.value, con_password.value);

                if(password_val == 'no sucess'){
                    error.innerHTML = 'password should have number, special characters and pasword and conform password shoudl be euqale';
                } else{
                    error.innerHTML = 'signup sucessfully';
                }
            }
        }
    }
});

function space_validation() {
    if(uname.value == '' || email.value == '' || password.value == '' || con_password.value == ''){
        state = 'no sucess';
    } else {
        state = 'sucess';
    }

    return state;
}

function name_validation(name) {
    if(/[0-9]/.test(name)){
        state = 'no sucess';
    } else{
        state = 'sucess';
    }

    return state;
}

function email_validation(eml, eml_val) {
    let extension = '@gmail.com';
    for(let i of eml_val){
        for(let j of eml){
            if(j == i){
                return state = 'no sucess';
            } else if(eml.includes(extension)){
                return state = 'sucess';
            }
        }
    }
}

function password_validation(psrd, con_psrd) {
    if(/[0-9]/.test(psrd) && /[!@#$%&*-+]/.test(psrd) && psrd === con_psrd){
        state = 'sucess';
    } else{
        state = 'no sucess';
    }

    return state;
}