// let products = {
//     data: [
//         {
//             productName: "Regular White T-Shirt",
//             category: "TopWear",
//             price: "30",
//             image: "shirt1.jpg",
//         },
//         {
//             productName: "Beige short Skirt",
//             category: "BottomWear",
//             price: "49",
//             image: "shirt2.jpg",
//         },
//         {
//             productName: "Basic Knitted Top",
//             category: "Topwear",
//             price: "29",
//             image: "shirt3.avif",
//         },
//         {
//             productName: "Black Leather Jacket",
//             category: "Jacket",
//             price: "129",
//             image: "shirt4.webp",
//         },
//         {
//             productName: "Stylish Pink Tousers",
//             category: "Bottomwear",
//             price: "89",
//             image: "shirt5.jpg",
//         },
//         {
//             productName: "Brown Mens Jacket",
//             category: "Jacket",
//             price: "189",
//             image: "shirt6.webp",
//         },
//         {
//             productName: "Comfy Gray Pants",
//             category: "Bottomwear",
//             price: "49",
//             image: "shirt7.jpg",
//         },
//         {
//             productName: "Sporty Watch",
//             category: "Watch",
//             price: "499",
//             image: "watch1.webp",
//         },
//     ],
// };
// console.log(products.data,"hello");

// for (let i of products.data){
//     //Create Card
//     let card=document.createElement("div");
//     //Card should have category and should stay hidden initially
//     card.classList.add("card","i.category");

//     //Image div
//     let imgContainer=document.createElement("div");
//     imgContainer.classList.add("image-container");
//     //img tag
//     let image=document.createElement("div");
//     image.setAttribute("src", "images/"+ i.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);

//     //Container
//  document.getElementById("products").appendChild(card);

// }

let products = {
  data: [
    { productName: "Regular White T-Shirt", category: "TopWear", price: "30", image: "shirt1.jpg" },
    { productName: "Beige short Skirt", category: "BottomWear", price: "49", image: "shirt2.jpg" },
    { productName: "Basic Knitted Top", category: "Topwear", price: "29", image: "shirt3.avif" },
    { productName: "Black Leather Jacket", category: "Jacket", price: "129", image: "shirt4.webp" },
    { productName: "Stylish Pink Tousers", category: "Bottomwear", price: "89", image: "shirt5.jpg" },
    { productName: "Brown Mens Jacket", category: "Jacket", price: "189", image: "shirt6.webp" },
    { productName: "Comfy Gray Pants", category: "Bottomwear", price: "49", image: "shirt7.jpg" },
    { productName: "Sporty Watch", category: "Watch", price: "499", image: "watch1.webp" },
  ],
};

for (let i of products.data) {
  // Create card
  let card = document.createElement("div");
  card.classList.add("card", i.category ,"hide");

  // Image container
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  // Image
  let image = document.createElement("img");
  image.setAttribute("src", "images/" + i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  // Add to main container
let container=document.createElement("div");
container.classList.add("container");

// Product name
let name=document.createElement("h5");
name.classList.add("product-name");
name.innerText=i.productName.toUpperCase();
container.appendChild(name);

// Price
let price=document.createElement("h6");
price.classList.add("product-price");
price.innerHTML="$" +i.price;
container.appendChild(price);


card.appendChild(container);

let productsContainer = document.getElementById("products");
productsContainer.appendChild(card);
}

  


//parameter passed from button (Parameter same as category)
function filterProducts(value){
   let buttons=document.querySelectorAll(".button-value");
   buttons.forEach((button)=>{
    //check if value equals innerText
    if(value.toUpperCase()==button.innerText.toUpperCase()){
        button.classList.add("active");
    }else{
        button.classList.remove("active");
    }
   });

    //select all cards
    let elements=document.querySelectorAll(".card");
      elements.forEach((element)=>{
        //display all cards on 'all' button click
        if(value == "All"){
            element.classList.remove("hide");
        }else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }else{
                element.classList.add("hide");
            }
        }
     
      });
};

// search button click

document.getElementById("search").addEventListener("click",function(){
    //initializations
    let searchInput=document.getElementById("search-input").value;
    let elements=document.querySelectorAll(".product-name");
    let cards=document.querySelectorAll(".card");

      //loop through all elements
   
      elements.forEach((element,index)=>{
        //check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card
            cards[index].classList.remove("hide");

        }else{
            cards[index].classList.add("hide");
        }
      })

})


//Initially display all products
window.onload = () => {
    filterProducts("All");
}