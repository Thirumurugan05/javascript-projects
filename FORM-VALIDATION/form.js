const form = document.getElementById('form');
const userName = document.querySelector('#input-username');
const email = document.querySelector('#input-email');
const password = document.querySelector('#input-password');
const password2 = document.querySelector('#input-confirm-password');


form.addeventListener('submit', (e) => {
    
    if(!validateInputes()){
        e.preventDefault();
    };
    
   
});

function validateInputes() {
    const usernameval = userName.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const password2val = password2.value.trim();

    let success =true;

    if(usernameval===''){
        success=false;
        setError(userName, 'userName cannot be blank');
    }else{
        setSuccess(userName)
    };

    if(emailval===""){
        success=false;
        setError(email, 'email cannot be blank');
    }else if(!validateEmail(emailval)){
        success=false;
        setError(email, 'Email is not valid');
    }else{
        setSuccess(email)
    };
     

    if(passwordval===''){
        success=false;
        setError(password,'password cannot be blank');
    }else if(passwordval.length<8){
        success=false;
        setError(password, 'password must be at least 8 characters');
    }
    else{
        setSuccess(password)
    };

    if(password2val===''){
        success=false;
        setError(password2, 'password cannot be blank');
    }else if(passwordval !== password2val){
        success=false;
        setError(password2, 'passwords do not match');
    }else{
        setSuccess(password2)
    };

    return success;
}; 



// element=pass, msg=req;
//for error 
function setError(element, message){
    const inputGroup=element.parentElement;
    const errorElemnt=inputGroup.querySelector('.error');
    errorElemnt.innerText=message;

    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
};



//for success
function setSuccess(element){
    const inputGroup=element.parentElement;
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}


// for eamil validaition
const validateEmail = (email) => {
     return String(email)
     .toLowerCase()
     .match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/);
};






// deep seek and find

/*
document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#form-total');
const userName = document.querySelector('#input-userName');
const email = document.querySelector('#input-email');
const password = document.querySelector('#input-password');
const password2 = document.querySelector('#input-confirm-password');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputes();
});

function validateInputes() {
    const usernameval = userName.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const password2val = password2.value.trim();

    if(usernameval === ''){
        setError(userName, 'Username cannot be blank');
    } else {
        setSuccess(userName);
    }

    if(emailval === ""){
        setError(email, 'Email cannot be blank');
    } else if(!validateEmail(emailval)){
        setError(email, 'Email is not valid');
    } else {
        setSuccess(email);
    }

    if(passwordval === ''){
        setError(password, 'Password cannot be blank');
    } else if(passwordval.length < 8){
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if(password2val === ''){
        setError(password2, 'Password cannot be blank');
    } else if(passwordval !== password2val){
        setError(password2, 'Passwords do not match');
    } else {
        setSuccess(password2);
    }
}

function setError(element, message){
    const inputGroup = element.parentElement;
    const errorElemnt = inputGroup.querySelector('.error');
    errorElemnt.innerText = message;

    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/);
};

});
*/