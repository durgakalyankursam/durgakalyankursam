var Name=document.forms['form']['Name'];
var email=document.forms['form']['email'];
var password=document.forms['form']['password'];
var confirm_password=document.forms['form']['confirm_password'];
var Name_error=document.getElementById('Name_error');
var email_error=document.getElementById('email_error');
var password_error=document.getElementById('password_error');
var confirm_password_error=document.getElementById('confirm_password_error');
Name.addEventListener('textInput',name_verify);
email.addEventListener('textInput',email_verify);
password.addEventListener('textInput',password_verify);
confirm_password.addEventListener('textInput',confirm_password_verify);
function validate(){
    if(Name.value.length<1){
        Name.style.border="1px solid red";
        Name_error.style.display="block";
        Name.focus();
        return false;
    }
    if(email.value.length<1){
        email.style.border="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
    if(password.value.length<1){
        password.style.border="1px solid red";
        password_error.style.display="block";
        password.focus();
        return false;
    }
    if(confirm_password.value==password){
        confirm_password.style.border="1px solid red";
        confirm_password_error.style.display="block";
        confirm_password.focus();
        return false;
    }
}
function email_verify(){
    if(Name.value.length>=10){
        Name.style.border="1px solid red";
        Name_error.style.display="none";
        return true;
    }
    if(email.value.length>=10){
        email.style.border="1px solid red";
        email_error.style.display="none";
        return true;
    }
    if(password.value.length>=10){
        password.style.border="1px solid red";
        password_error.style.display="none";
        return true;
    }
    if(confirm_password.value==password){
        confirm_password.style.border="1px solid red";
        confirm_password_error.style.display="none";
        return true;
    }
}