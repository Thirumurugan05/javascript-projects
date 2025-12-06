const loginForm=document.querySelector(".login-form");
const registerForm=document.querySelector(".register-form");

const wrapper =document.querySelector(".wrapper");
const loginTitle=document.querySelector(".title-login");
const registerTitle=document.querySelector(".title-register");


const signUp=document.querySelector(".signUpBtn")
const signIp=document.querySelector(".signInBtn")

const clr=document.querySelector(".form2");






// function registerFunction(){
//     loginForm.style.left="50%";
//     loginForm.style.opacity=1;

//     registerForm.style.left="150%";
//     registerForm.style.opacity=0;

//     wrapper.style.height="500px"
    

//     loginTitle.style.top="50%";
//     loginTitle.style.opacity=1;

//     registerTitle.style.top="50px";
//     registerTitle.style.opacity=0;
// }

// function loginFunction(){
//     loginForm.style.left="-50%";
//     loginForm.style.opacity=0;

//     registerForm.style.left="50%";
//     registerForm.style.opacity=1;

//     wrapper.style.height="580px"
    

//     loginTitle.style.top="-60%";
//     loginTitle.style.opacity=0;

//     registerTitle.style.top="50%";
//     registerTitle.style.opacity=1;
// }




function registerFunction(){

    registerForm.style.left="0"
     registerForm.style.opacity=1;

     loginForm.style.left="110%";
     loginForm.style.opacity=0;

     loginTitle.style.display="none";
     registerTitle.style.top="0"

     clr.style.backgroundColor="white"
     clr.style.padding=" 0px 20px 0px 20px"

       clr.style.display="block"
  
}

function loginFunction(){

    registerForm.style.left="110%"
     registerForm.style.opacity=0;

     loginForm.style.right="110%";
     loginForm.style.opacity=1;

  
    

     loginTitle.style.display="block";
     registerTitle.style.top="50px"

    //  clr.style.backgroundColor="white"
    //  clr.style.padding=" 0px 20px 0 20px"
  
}