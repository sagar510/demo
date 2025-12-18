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

