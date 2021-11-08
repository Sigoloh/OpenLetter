const loginFormFields = {
    email: document.getElementById('emailFormInput'),
    password: document.getElementById('passwordFormInput'),
}
function submitLogin(){
    console.log(loginFormFields.password.value);
    console.log(loginFormFields.email.value);
}
