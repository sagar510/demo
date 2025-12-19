document.getElementById("prev").addEventListener("click", clickPrev);
document.getElementById("next").addEventListener("click", clickNext);

mainDivison = document.querySelector(".main");

let state = 0;
let change = 25;
let rightstopper = 100; 

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function clickPrev() {  
    if(state<=0) return;
    state -= change;
    mainDivison.style.right = state + '%';
}

function clickNext() {
    if(state>=rightstopper) return;
    state += change;
    mainDivison.style.right = state + '%';
}

const ul = document.querySelector(".nav ul").children;
ul[0].classList.add("active");
let clicked = 0;
for(let i=0; i<ul.length; i++){
    const a = ul[i].firstChild;
    a.addEventListener("click", function(){
        ul[clicked].classList.remove("active");
        ul[i].classList.add("active");
        clicked = i;
    });
}


/* slider intial setup */

document.addEventListener("DOMContentLoaded", function(){
    let screenWidth = document.documentElement.clientWidth;

    if(screenWidth <= 509){
        change = 100;
        rightstopper = 700;
    }else if(screenWidth <= 763.5){
        change = 50;
        rightstopper = 300;
    }else if(screenWidth <= 1272.5){
        change = 34;
        rightstopper = 150;
    }
});


/* When screen changes, slider change code : */

function changeslider(media, chng, rigstopper){
    if(media.matches){
        change = chng;
        rightstopper = rigstopper;
    }
}

var z = window.matchMedia("(max-width: 509px)");
z.addEventListener("change", function() {
  changeslider(z, 100, 700);
});

var y = window.matchMedia("(max-width: 763.5px) and (min-width: 509.01px)");
y.addEventListener("change", function() {
  changeslider(y, 50, 300);
});

var x = window.matchMedia("(max-width: 1272.5px) and (min-width: 763.51px)");
x.addEventListener("change", function() {
  changeslider(x, 34, 150);
});


const collapsedbar = document.getElementById("right-collapsed-bar");
document.getElementById("collapse-bar-logo").addEventListener("click", function(){
    collapsedbar.style.display = 'block';
});
document.getElementById("collapse-close").addEventListener("click", function(){
    collapsedbar.style.display = 'none';
});

const lis = collapsedbar.children;
for(let i=0; i<lis.length; i++) {
    lis[i].addEventListener("click", function(){
        collapsedbar.style.display = 'none';
    });
}



/* Product data coming from outside */
/* As of now simple data coming from array in coding language */

// let productcards = [
//     {
//         "url" : "./images/product-cards/1-1221-vilante-boys-girls-original-imahgd8jv9zcgtxg.webp",
//         "text" : "Wrist Watches",
//         "para" : "Min. 50% Off"
//     },
//     {
//         "url" : "./images/product-cards/6-biss-2031-blu-wht-40-bruton-blue-original-imahczyufwkmpeyq.webp",
//         "text" : "Men's Sports Shoes",
//         "para" : "Min. 70% Off"
//     },
// ]


// const cardscontainer = document.querySelector("#elect .cards-container");
// for(let i=0; i<productcards.length; i++){

//     /*
//         Step 1 = get product data
//         step 2 = have cards container location
//         step 3 = add new div with having classname as card
//         step 4 = create new img element, span, p
//         Step 5 = Fill above 3 data with product data
//         Step 6 = Add 3 elements in card
//     */
//     let product = productcards[i];  //Step 1
//     const card = document.createElement("div"); //step 3
//     card.classList.add("card"); // step 3

//     const img = document.createElement("img");
//     img.src = product.url;

//     const span = document.createElement("span");
//     span.textContent = product.text;

//     const para = document.createElement("p");
//     para.textContent = product.para;

//     card.appendChild(img);
//     card.appendChild(span);
//     card.appendChild(para);

//     cardscontainer.appendChild(card);
// }



// $('#ecomCardContainer').each(function (ind, value) {

//     $('.view-product').click(function(){
//         $("p").hide();
//     });
// });



// $(document).ready(function(){
//   $('.view-product').click(function(){
//     this.pa
//   });
// });

const productcards = document.getElementById('ecomCardContainer');
for(let i=0; i<productcards.length; i++){
    const productcard = productcards[i];
    const cardbody = productcard.firstChild.lastChild
    const button = cardbody.lastChild;
    console.log(productcard);
    button.addEventListener("click", function(){
        
        alert(cardbody.firstChild.textContent);
    });
}

$('.view-product-button').click(function(){
    productname = this.parentElement.firstChild.textContent;
    alert(productname);
});

$.get("./products.txt", function(_, _, xhr){
    if(xhr.status === 200){
        console.log(xhr.responseText);
    }else if(xhr.status === 500){
        console.log("Internal Server Error");
    }else{
        console.log("Other error occured");
    }
});


