const arrow = document.querySelector(".arrow");
const navLinks = document.querySelector(".nav-links");

// Open / Close menu
arrow.addEventListener("click", () => {
    navLinks.classList.toggle("display");
});

// Close menu when clicking any link
const eachLink = document.querySelectorAll(".nav-links li a");
eachLink.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("display");
    });
});
