const Btnz = document.querySelectorAll(".btn");
const paraItem = document.querySelectorAll(".tap-content p");


const home=document.querySelector(".tap-home");
const about=document.querySelector(".tap-about");
const contact=document.querySelector(".tap-contact");

Btnz.forEach((btn) => {
  btn.addEventListener("click", () => {
    Btnz.forEach((btns) => {
      btns.classList.remove("active");

      btn.classList.add("active");
    });

    paraItem.forEach((para) => {
      para.style.display = "none";
    });

    if (btn.classList.contains("home")) {
     home.style.display = "block";
    } else if (btn.classList.contains("about")) {
      about.style.display = "block";
    } else {
     contact.style.display = "block";
    }
  });
});
