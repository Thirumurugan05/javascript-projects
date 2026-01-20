document.addEventListener("DOMContentLoaded", function(){
    const images=document.querySelectorAll(".images img");
    const model=document.querySelector(".model");
    const modelImg=document.querySelector(".model-img");
    const modelText=document.querySelector(".model-text");
    const closeBtn=document.querySelector(".close");
    const btnprev=document.querySelector(".btn-prev");
    const btnnext=document.querySelector(".btn-next");
    let currentIndex =0;

    images.forEach((image,index)=>{
        image.addEventListener("click", function(){
            currentIndex=index;
            ubdateModelContent();
            model.classList.add("show")
        });
    });

    btnnext.addEventListener("click", function(){
        currentIndex=currentIndex+1>=images.length ? 0 : currentIndex+1;
        ubdateModelContent();
    });
    btnprev.addEventListener("click", function(){
        currentIndex=currentIndex-1<0?images.length-1:currentIndex-1;
        ubdateModelContent();
    })

    closeBtn.addEventListener("click", function(){
        model.classList.remove("show")
    });
     

    function ubdateModelContent(){
        const image=images[currentIndex];
        modelImg.classList.remove("show");
       setTimeout(() => {
           modelImg.src=image.src;
        modelText.innerHTML=image.alt;
        modelImg.classList.add("show")
       },100);
    }





})