let arrayProducts = [
    {
        id: 1,
        name: "HTML",
        image: "img1.jpeg",
        price: "1000",
        rating: 3,
    },
    {
        id: 2,
        name: "CSS",
        image: "img2.jpeg",
        price: "1000",
        rating: 4,
    },
    {
        id: 3,
        name: "JAVASCRIPT",
        image: "img3.jpeg",
        price: "5000",
        rating: 5,
    },
    {
        id: 4,
        name: "REACT",
        image: "img4.jpeg",
        price: "2000",
        rating: 2.5,
    },
    {
        id: 5,
        name: "PYTHON",
        image: "img7.jpeg",
        price: "5000",
        rating: 2,
    },
    {
        id: 6,
        name: "FLUTTER",
        image: "img6.jpeg",
        price: "6000",
        rating: 5,
    },
]


const body = document.querySelector("body");
Products = document.querySelector(".products");
shoppingBasket = document.querySelector(".shoppingBasket");
close = document.querySelector(".close");
productList = document.querySelector(".productList");
quantity = document.querySelector(".quantity");
total = document.querySelector(".total");

let checkOutList = [];

shoppingBasket.addEventListener("click", function () {
    body.classList.add("active")
});


close.addEventListener("click", function () {
    body.classList.remove("active");
})

function onInit() {
    arrayProducts.forEach((item, key) => {
        let div = document.createElement("div");
        div.classList.add("items")

        let star = "";
        for (i = 0; i < item.rating; i++) {
            star += `<i class="fa fa-star"></i>`
        }

        div.innerHTML = `
              <img src="images/${item.image}"/>
              <div class="names">${item.name}</div>
              <div class="star">${star}</div>
              <div class="price"><small>₹</small>${item.price}</div>
              <button onClick="addCart(${key})"> <i class="fa fa-cart-plus cart"></i>Add To Card</button>
              `;


        Products.appendChild(div)
    })
}
onInit();

function addCart(id) {
    if (checkOutList[id] == null) {
        checkOutList[id] = arrayProducts[id];
        checkOutList[id].quantity = 1;
    } else {
        checkOutList[id].quantity += 1
    }
    reaLoad()
}

function reaLoad() {
    productList.innerHTML = '';

    let count = 0;
    let totalPrice = 0;

    checkOutList.forEach((item, key) => {
        totalPrice += parseInt(item.price * item.quantity)
        count += item.quantity;

        let li = document.createElement("li");
        li.innerHTML = `
        <img src="images/${item.image}"/>
        <div>${item.name}</div>
        <div>${item.price}</div>
        <div>
        <button onClick="changeQantity(${key},${item.quantity - 1})">-</button>
        <div class="count">${item.quantity}</div>
         <button onClick="changeQantity(${key},${item.quantity + 1})">+</button>
        </div>
        `;

        productList.appendChild(li);
    });

    total.innerHTML = `
        <small>subtotal(${count}items)</small>
     `+ totalPrice;
    quantity.innerHTML = count;



}


function changeQantity(key, quantity) {
    if (quantity === 0) {
        delete checkOutList[key];
    } else {
        checkOutList[key].quantity = quantity;
    }
    reaLoad()
}