let countainer=document.querySelector(".container")

for(let i=0;i<10;i++){
    let d=document.createElement("div")
    d.setAttribute("class","box");
    countainer.appendChild(d)
}
let divs=document.querySelectorAll(".box");
let i=0;
function cycle(){
    divs[i].classList.toggle("on")
    i++;
    if(i>=divs.length)i=0
}
let I=setInterval(cycle,1000)