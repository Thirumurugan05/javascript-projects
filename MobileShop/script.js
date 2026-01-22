// File: JS-JULY/script.js
// This file contains the JavaScript code for the filter functionality in the product listing page.

const phones=[
    {
        id:1,
        name:"iPhone 14 Pro",
        brand:"Apple",
        price:999,
        originalPrice:1099,
        image:"https://example.com/iphone14pro.jpg",
        features:["5G","OLED Display","A16 Bionic Chip"],
        Storage:"128GB",
        color:"Space Black"
    }
    ,
    {
        id:2,
        name:"Samsung Galaxy S23",
        brand:"Samsung",
        price:799,
        originalPrice:899,
        image:"https://example.com/galaxys23.jpg",
        features:["5G","AMOLED Display","Snapdragon 8 Gen 2"],
        Storage:"256GB",
        color:"Phantom Black"
    },
    {
        id:3,
        name:"Google Pixel 7 Pro",
        brand:"Google",
        price:899,
        originalPrice:999,
        image:"https://example.com/pixel7pro.jpg",
        features:["5G","OLED Display","Google Tensor G2"],
        Storage:"128GB",
        color:"Obsidian"
    },
    {
        id:4,
        name:"OnePlus 11",
        brand:"OnePlus",
        price:749,
        originalPrice:799,
        image:"https://example.com/oneplus11.jpg",
        features:["5G","Fluid AMOLED Display","Snapdragon 8 Gen 2"],
        Storage:"256GB",
        color:"Eternal Green"
    },
    {
        id:5,
        name:"Xiaomi 13 Pro",
        brand:"Xiaomi",
        price:899,
        originalPrice:999,
        image:"https://example.com/xiaomi13pro.jpg",
        features:["5G","AMOLED Display","Snapdragon 8 Gen 2"],
        Storage:"512GB",
        color:"Ceramic White"
    },
    {
        id:6,
        name:"Sony Xperia 1 IV",
        brand:"Sony",
        price:1299,
        originalPrice:1399,
        image:"https://example.com/xperia1iv.jpg",
        features:["5G","4K HDR OLED Display","Snapdragon 8 Gen 1"],
        Storage:"256GB",
        color:"Frosted Black"
    },
    {
        id:7,
        name:"Oppo Find X5 Pro",
        brand:"Oppo",
        price:1099,
        originalPrice:1199,
        image:"https://example.com/findx5pro.jpg",
        features:["5G","AMOLED Display","Snapdragon 8 Gen 1"],
        Storage:"256GB",
        color:"Ceramic White"
    },
    {
        id:8,
        name:"Vivo X80 Pro",
        brand:"Vivo",
        price:999,
        originalPrice:1099,
        image:"https://example.com/x80pro.jpg",
        features:["5G","AMOLED Display","Snapdragon 8 Gen 1"],
        Storage:"256GB",
        color:"Cosmic Black"
    },
    {
        id:9,
        name:"Realme GT 2 Pro",
        brand:"Realme",
        price:749,
        originalPrice:799,
        image:"https://example.com/gt2pro.jpg",
        features:["5G","AMOLED Display","Snapdragon 8 Gen 1"],
        Storage:"256GB",
        color:"Steel Black"
    },
    {
        id:10,
        name:"Asus ROG Phone 6",
        brand:"Asus",
        price:999,
        originalPrice:1099,
        image:"https://example.com/rogphone6.jpg",
        features:["5G","AMOLED Display","Snapdragon 8+ Gen 1"],
        Storage:"512GB",
        color:"Phantom Black"
    }
]

const filterBtn=document.querySelector("#filterButton");
const closeFilter=document.querySelector("#closeFilterButton");
const filterSidebar=document.querySelector("#filterSidebar");
const filterOverlay=document.querySelector("#filterOverlay");

filterBtn.addEventListener("click", function(){
    filterSidebar.classList.add("open");
    filterOverlay.classList.add("show");
});

closeFilter.addEventListener("click", ()=>{
    filterSidebar.classList.remove("open");
    filterOverlay.classList.remove("show");
});

filterOverlay.addEventListener("click", ()=>{
    filterSidebar.classList.remove("open");
    filterOverlay.classList.remove("show");
});




