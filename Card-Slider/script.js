const cardList = document.querySelector(".card-list");
const dots = document.querySelectorAll(".dots span");
const prevBtn = document.querySelector(".arrow.left");
const nextBtn = document.querySelector(".arrow.right");
const cardItems = document.querySelectorAll(".card-item");

let currentIndex = 0;
const totalCards = cardItems.length;

// Update the visible card + active dot
function updateSlider() {
  const cardWidth = cardItems[0].offsetWidth + 20; // 20 = gap
  cardList.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// Right arrow (next)
nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateSlider();
  }
});

// Left arrow (previous)
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Dots click
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

// Initialize
updateSlider();
