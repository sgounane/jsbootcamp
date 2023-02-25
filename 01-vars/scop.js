(function(){
let a=24
function fn(){
    a=12
    if(a){
        let b=15
        console.log("a inside block:",a, b)
    }
    //console.log("b outside block:", b)
    utile()
    
}

fn()
function utile(){
    console.log("Utile a: ",a)
}
// let  utile=function(){
//     console.log("Utile a: ",a)
// }

utile();


    console.log("Hi from anonymouse function!!!")
})()