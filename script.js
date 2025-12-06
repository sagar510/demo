document.getElementById("prev").addEventListener("click", clickPrev);
document.getElementById("next").addEventListener("click", clickNext);


mainDivison = document.querySelector(".main");

let state = 0;

function clickPrev() {  
    if(state==0) return;
    state -= 25;
    mainDivison.style.right = state + '%';
}

function clickNext() {
    if(state==50) return;
    state += 25;
    mainDivison.style.right = state + '%';
}

