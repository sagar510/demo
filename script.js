document.getElementById("prev").addEventListener("click", clickPrev);
document.getElementById("next").addEventListener("click", clickNext);

mainDivison = document.querySelector(".main");

let state = 0;

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function clickPrev() {  
    if(state==0) return;
    state -= 25;
    mainDivison.style.right = state + '%';
}

function clickNext() {
    if(state==100) return;
    state += 25;
    mainDivison.style.right = state + '%';
}

let clicked = -1;

const ul = document.querySelector(".nav ul").children;
for(let i=0; i<ul.length; i++){
    const a = ul[i].firstChild;
    a.addEventListener("click", function(){
        if(clicked != -1) ul[clicked].classList.remove("active");
        ul[i].classList.add("active");
        clicked = i;
    });
}