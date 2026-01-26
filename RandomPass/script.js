const inuputBtn=document.querySelector(".inputItem");
const copyBtn=document.querySelector("#copyBtn");
const  GenBtn=document.querySelector("#btn");




GenBtn.addEventListener("click", () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let passgen = "";

    for (let i = 0; i < 8; i++) {
        passgen += chars[Math.floor(Math.random() * chars.length)];
    }

    inuputBtn.value = passgen;
});



copyBtn.addEventListener("click",()=>{
    inuputBtn.select();
    document.execCommand("copy")
})