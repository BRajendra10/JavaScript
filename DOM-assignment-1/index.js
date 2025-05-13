// sign up form eliments
const signup_name = document.getElementById('name');
const signup_email = document.getElementById('email');
const signup_country = document.getElementById('country');
const signup_phone = document.getElementById('phone');
const signup_password = document.getElementById('password');

// sign in form eliments
const signin_name = document.getElementById('signin-name');
const signin_email = document.getElementById('signin-email');
const signin_password = document.getElementById('signin-password');

let signin_info = [];
let signup_info = [];
let signin_count = 1;
let signup_count = 1;

document.getElementById('signup').addEventListener('submit', (el) => {
    el.preventDefault();
    sign_up();
});
document.getElementById('signin').addEventListener('submit', (el) => {
    el.preventDefault();
    sign_in();
});

function sign_up() {
    let new_obj = {
        id: signup_count++,
        name: signup_name.value,
        email: signup_email.value,
        country: signup_country.value,
        phone: signup_phone.value,
        password: signup_password.value
    }

    signup_name.value = "";
    signup_email.value = "";
    signup_country.value = "";
    signup_phone.value = "";
    signup_password.value = "";

    signup_info.push(new_obj);
    console.log(signup_info);
}

function sign_in() {
    let new_obj = {
        id: signin_count++,
        name: signin_name.value,
        email: signin_email.value,
        password: signin_password.value
    }

    signin_name.value = "";
    signin_email.value = "";
    signin_password.value = "";

    signin_info.push(new_obj);
    console.log(signin_info);
}