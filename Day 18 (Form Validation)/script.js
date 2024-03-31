var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var mailError = document.getElementById('mail-error');
var messageError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');


function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length ==0){
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no. should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}

function validateMail(){
    var mail = document.getElementById('contact-mail').value;

    if(mail.length == 0){
        mailError.innerHTML = 'Email is required';
        return false;
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML = 'Email Invalid';
        return false;
    }
    mailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}
function validateMsg(){
    var msg = document.getElementById('contact-msg').value;
    var required = 30;
    var left = required- msg.length;

    if(left > 0){
        messageError.innerHTML = left + 'more characters are required';
        return false;
    }
    messageError.innerHTML = mailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateMail() || !validateMsg()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the errors to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;    
    }
    submitError.innerHTML = 'Successfully Submitted','<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}