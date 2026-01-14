// hide  bar showing
const btnCart=document.querySelector("#cart-icon");
const cart=document.querySelector(".cart");
const btnClose=document.querySelector("#cart-close");

// class list add toggle
btnCart.addEventListener("click",()=>{
    cart.classList.add("cart-active");
});


//class list remove toggle
btnClose.addEventListener("click", ()=>{
      cart.classList.remove("cart-active");
});

document.addEventListener("DOMContentLoaded",loadFood);

function loadFood(){
  loadContent()
};

function loadContent (){
// remove food items from cart
     let btnRemove=document.querySelectorAll(".cart-remove");
     btnRemove.forEach((btn)=>{
        btn.addEventListener("click",removeItem)
     });
   
//product item change event

     let qtyElement=document.querySelectorAll(".cart-quantity");
     qtyElement.forEach((input)=>{
        input.addEventListener("change",changeQty)
     });

//Product Cart
let cartBtns=document.querySelectorAll('.add-cart');
cartBtns.forEach((e)=>{
    e.addEventListener("click",addCart)
});

ubdateTotal();

};

// RemoveItem
function removeItem(){
    if(confirm("Are You Sur To Remove?")){
        // this.parentElement.remove();
        let title=this.parentElement(".card-food-title").innerHTML;
        itemList=itemList.filter((el)=>el.title!=title);
        this.parentElement.remove();
        loadContent();
    };

};

// change qty
function changeQty(){
    if(isNaN(this.value)|| this.value<1){
        this.value=1;
    }
    loadContent();
};

//for same item stored same products

let itemList=[];

//addBtn productss;
function addCart(){
    let food=this.parentElement;
    console.log(food,"food masterys")
//  console.log(food.querySelectorAll('.food-title').innerHTML);
    let title=document.querySelector(".food-title").innerHTML;
    let price=document.querySelector(".food-price").innerHTML;
    let imgSrc=document.querySelector(".food-img").src;
    // console.log(title,price,imgSrc);


    let newProduct={title,price,imgSrc};
//check product already exit in cart
  if(itemList.find((el)=>el.title==newProduct.title)){
    alert("product already have")
  }else{
    itemList.push(newProduct)
  };

    let newProductElement= createCartProduct(title,price,imgSrc);
    let element=document.createElement("div");
    element.innerHTML=newProductElement;


    let cartBasket=document.querySelector(".cart-content");
    cartBasket.append(element);

    loadContent()
}

function createCartProduct(title,price,imgSrc){
    return `
                <div class="cart-box">
                    <img src="${imgSrc}" alt="foot-item" class="cart-img">
                    <div class="detail-box">
                        <div class="card-food-title">${title}</div>
                        <div class="price-box">
                            <div class="cart-price">${price}</div>
                            <div class="cart-amt">RS.72</div>
                        </div>
                        <input type="number" value="1" class="cart-quantity">
                    </div>
                    <ion-icon name="trash-outline" class="cart-remove"></ion-icon>
                </div>
         `
};


// price adding claculationsss;
function ubdateTotal(){

    const cartItems=document.querySelectorAll('.cart-box');
    const totalValue=document.querySelector('.total-price');

    let total=0;

    cartItems.forEach(product=>{
        let priceElement=product.querySelector('.cart-price');   
        let price=parseFloat(priceElement.innerHTML.replace("RS.",""));
        let qty=product.querySelector('.cart-quantity').value;
        total+=(price+qty);
         //total qty amount by product selecting;
        product.querySelector(".cart-amount").innerHTML="Rs."+price*qty;

    });
    totalValue.innerHTML='RS.'+total;


const cartCount=document.querySelector("#cart-count");
let count=itemList.length;
cartCount.innerHTML=count;

if(count==0){
    cartCount.style.display="none"
}else{
     cartCount.style.display="block"
};
};







