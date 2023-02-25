function add(a,b){
    s=a+b;
    return s;
}   

let fn=function(a,b){
    s=a+b
    return s;
}

let multiplay=function(a){
    for(let i=0;i<11;i++) 
        console.log(`${a}x${i}=${i*a}`)
}
a=Number(prompt("Un nombre: "))
if(!isNaN(a)) multiplay(a)
else console.log("Nombre invalid")