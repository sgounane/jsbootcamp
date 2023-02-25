let a=Math.random()*100
a=Math.floor(a)
let count=1;
let b;
do{
    b=prompt("Donner un nombre [0  99]")
    console.log(a,b)
    if(a<b) console.log("Besoin d'un nobre plus ptit");
    else if(a>b) console.log("Besoin d'un nobre plus grand")
    count++
}while(b!=a && count<=10)
if(b==a) console.log(`Bingo!! ${count } tentatives`)
else console.log("Perdu :(")