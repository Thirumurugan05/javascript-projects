// ================== DATA (Aliens with stats) ==================
const aliens = [
  { id: 1, name: "Heatblast", img: "../Core-Projects/AddCartItems/image/heatblast.webp", price: 1999, stats: { strength: 70, speed: 55, iq: 50, energy: 95 } },
  { id: 2, name: "XLR8", img: "../Core-Projects/AddCartItems/image/xlr8.webp", price: 1499, stats: { strength: 45, speed: 98, iq: 65, energy: 55 } },
  { id: 3, name: "Four Arms", img: "../Core-Projects/AddCartItems/image/fourarms.webp", price: 2499, stats: { strength: 98, speed: 50, iq: 55, energy: 65 } },
  { id: 4, name: "Diamondhead", img: "../Core-Projects/AddCartItems/image/dimondhit.webp", price: 899, stats: { strength: 80, speed: 60, iq: 60, energy: 70 } },
  { id: 5, name: "Upgrade", img: "../Core-Projects/AddCartItems/image/upgrade.webp", price: 1799, stats: { strength: 65, speed: 65, iq: 85, energy: 80 } },
  { id: 6, name: "Alien X", img: "../Core-Projects/AddCartItems/image/alienx.webp", price: 9999, stats: { strength: 100, speed: 100, iq: 100, energy: 100 } },
];


// ================== DOM ==================
const alien1Select = document.querySelector("#alien1");
const alien2Select = document.querySelector("#alien2");
const fightBtn = document.querySelector("#fightBtn");

const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const result = document.querySelector("#result");



// cart dom
const cartItems = document.querySelector(".cart-items");
const totalBox = document.querySelector(".total");

// ================== CART (same method you practiced) ==================
let cart = [];

function addToCart(id){
  const item = aliens.find(a => a.id === id);
  const existing = cart.find(c => c.id === id);

  if(existing){
    existing.qty += 1;
  }else{
    cart.push({ ...item, qty: 1 });
  }

  renderCart();
}

function renderCart(){
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-info">
        <h4>${item.name}</h4>
        <p>₹${item.price} x ${item.qty}</p>
      </div>
      <div class="qty-btns">
        <button class="dec" data-id="${item.id}">-</button>
        <button class="inc" data-id="${item.id}">+</button>
      </div>
    `;
    cartItems.appendChild(div);
  });

  // event delegation for cart buttons
  cartItems.addEventListener("click", handleCartClick);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  totalBox.textContent = `Total: ₹${total}`;
}

// one time cart click handler
function handleCartClick(e){
  const id = Number(e.target.dataset.id);
  if(!id) return;

  const found = cart.find(i => i.id === id);

  if(e.target.classList.contains("inc")){
    found.qty += 1;
  }

  if(e.target.classList.contains("dec")){
    found.qty -= 1;
    if(found.qty === 0){
      cart = cart.filter(i => i.id !== id);
    }
  }

  renderCart();
}

// ================== FIGHT (array logic) ==================
function findAlien(id){
  return aliens.find(a => a.id === Number(id));
}

function makeStat(label, value){
  return `
    <div>
      <div style="display:flex;justify-content:space-between;font-weight:900;">
        <span>${label}</span>
        <span>${value}</span>
      </div>
      <div class="bar">
        <div class="fill" style="width:${value}%"></div>
      </div>
    </div>
  `;
}

function renderCard(alien, target){
  target.innerHTML = `
    <img src="${alien.img}" alt="${alien.name}">
    <h3>${alien.name}</h3>

    <div class="stats">
      ${makeStat("Strength", alien.stats.strength)}
      ${makeStat("Speed", alien.stats.speed)}
      ${makeStat("IQ", alien.stats.iq)}
      ${makeStat("Energy", alien.stats.energy)}
    </div>

    <button class="buy-btn" data-id="${alien.id}">Add To Cart 🛒</button>
  `;
}

function loadDropdown(){
  alien1Select.innerHTML = "";
  alien2Select.innerHTML = "";

  aliens.forEach((a) => {
    alien1Select.innerHTML += `<option value="${a.id}">${a.name}</option>`;
    alien2Select.innerHTML += `<option value="${a.id}">${a.name}</option>`;
  });

  alien1Select.value = aliens[0].id;
  alien2Select.value = aliens[1]?.id || aliens[0].id;
}

function showCards(){
  const a1 = findAlien(alien1Select.value);
  const a2 = findAlien(alien2Select.value);

  renderCard(a1, card1);
  renderCard(a2, card2);
}

alien1Select.addEventListener("change", showCards);
alien2Select.addEventListener("change", showCards);

// buy button click (delegation)
document.querySelector(".fight-cards").addEventListener("click", (e) => {
  if(e.target.classList.contains("buy-btn")){
    addToCart(Number(e.target.dataset.id));
  }
});

// fight
fightBtn.addEventListener("click", () => {
  const a1 = findAlien(alien1Select.value);
  const a2 = findAlien(alien2Select.value);

  if(a1.id === a2.id){
    result.textContent = "Choose two different aliens 😅";
    return;
  }

  const score1 = a1.stats.strength + a1.stats.speed + a1.stats.iq + a1.stats.energy;
  const score2 = a2.stats.strength + a2.stats.speed + a2.stats.iq + a2.stats.energy;

  if(score1 > score2){
    result.textContent = `🏆 Winner: ${a1.name} (Score ${score1} vs ${score2})`;
  }else if(score2 > score1){
    result.textContent = `🏆 Winner: ${a2.name} (Score ${score2} vs ${score1})`;
  }else{
    result.textContent = `🤝 Draw Match! (${score1} vs ${score2})`;
  }

});

// ================== INIT ==================
loadDropdown();
showCards();
renderCart();
