const toggleBtn=document.querySelector('#eye');
const input=document.querySelector('.input-container input');
const inputcontainer=document.querySelector(".input-container");
const msg=document.querySelector(".msg");

let password=true;

toggleBtn.addEventListener("click", function(){
    if(password){
          input.setAttribute("type","text");
          password=false;
          toggleBtn.classList.remove("fa-eye-slash");
          toggleBtn.classList.add("fa-eye");

    }else{
        input.setAttribute("type", "password");
        password=true;
        toggleBtn.classList.add("fa-eye-slash");
        toggleBtn.classList.remove("fa-eye"); 
    }
});

input.addEventListener("keyup", function(){
  const item=input.value.length;
  const min=5;
  const max=10;
   
 if(item<min){
    inputcontainer.classList.add("error");
    inputcontainer.classList.remove("good");
    msg.innertext="plese enter the min 5 char!"
  }else if(item>max){
    inputcontainer.classList.remove('good');
    inputcontainer.classList.add("error"); 
     msg.innertext="plese enter the max 10 char!"
  }
  else{
    inputcontainer.classList.remove("error");
    inputcontainer.classList.add("good");
    msg.display="none";
    msg.innerHTML="Password is great";
    msg.style.color="green";
  }

})












// type 2

// toggleBtn.addEventListener("click", function(){
//     if(input.type=="password"){
//         input.type="text";
//         toggleBtn.classList.add("show");
//     }else{
//         input.type="password";
//         toggleBtn.classList.remove("show")
//     }
// })