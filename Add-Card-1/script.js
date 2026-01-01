const product = [
  { id: 0, Image: 'image/image1.avif', title: 'Z flip Foldable Mobile', price: 120 },
  { id: 1, Image: 'image/image2.jpg', title: 'Air pods Pro', price: 180 },
  { id: 2, Image: 'image/image3.webp', title: '250D DSLR Camera', price: 150 },
  { id: 3, Image: 'image/image4.webp', title: 'Head Phones', price: 100 },
];

const categories = product; // no need to use Set

let i = 0;
document.getElementById("root").innerHTML = categories.map((item) => {
  var { Image, title, price } = item;
  return (
    `<div class="box">
        <div class="img-box">
            <img class="images" src=${Image}>
        </div>
        <div class="bottom">
            <p>${title}</p>
            <h2>Price:${price}.00</h2>
            <button onClick='addtocart(${i++})'>Add To Cart</button>
        </div>
    </div>`
  );
}).join(''); // join to avoid commas in HTML


 var cart=[];

 function addtocart(e){
  cart.push({...categories[e]});
  displayCart()
 }

 function delElement(e){
  cart.splice(e,1);
  displayCart()
 }

function displayCart(e) {
  let j = 0;
  let total=0;

    document.getElementById("count").innerText = cart.length;

  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your Cart Is Empty";
    document.getElementById("total").innerHTML="$"+0+".00"; 
  } else {
    document.getElementById("cartItem").innerHTML = cart.map((items) => {
      var { Image, title, price } = items;

      total=total+price;
      document.getElementById("total").innerHTML="$"+total+".00";

      return `
        <div class="cart-item">
          <div class="row-img">
            <img class="rowing" src=${Image}>
          </div>
          <p style="font-size:12px">${title}</p>
          <h2 style="font-size:15px">${price}.00</h2>
        <i class="fa-solid fa-trash-can" onclick="delElement(${j++})"></i>

        </div>
      `;
    }).join("");
  }
}
displayCart()