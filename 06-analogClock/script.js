let s=document.querySelector("#s")
let m=document.querySelector("#m")
let h=document.querySelector("#h")
console.log(s)

let u=360/60
let uh=36/(12*360)
function updateclock(){
    let d=new Date();
    let sc=d.getSeconds()
    let ms=d.getMinutes()
    let hs=d.getHours()
    s.setAttribute("transform","rotate("+sc*u+")")
    m.setAttribute("transform","rotate("+ms*u+")")
    h.setAttribute("transform","rotate("+uh*hs/36+")")
}

let I=setInterval(updateclock,1000)