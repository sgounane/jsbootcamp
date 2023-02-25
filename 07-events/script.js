let container=document.querySelector("#container")
let circle=document.querySelector("#circle")
let n;
function myFunction(e){
    let x=e.clientX
    let y=e.clientY
    circle.style.top=container.clientHeight-(y-circle.clientHeight/2)+"px"
    circle.style.left=container.clientWidth-(x-circle.clientWidth/2)+"px"    
}
//myFunction("Salut")
function tgl(e){
    circle.classList.toggle("on")
}
container.addEventListener("mousemove",myFunction);
circle.addEventListener("mouseout",tgl)
circle.addEventListener("mouseover",tgl)