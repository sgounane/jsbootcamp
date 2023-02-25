let countriesDiv=document.querySelector("#countriesDiv")
let dataDiv=document.querySelector("#dataDiv")
let req=new XMLHttpRequest()
//req.open("GET","https://api.covid19api.com/dayone/country/MA")
req.open("GET","https://api.covid19api.com/countries")
function updateData(e){
    let ctr=e.target.getAttribute("id")
    let req=new XMLHttpRequest()
    req.open("GET","https://api.covid19api.com/dayone/country/"+ctr)

    req.onreadystatechange=()=>{
        console.log(req.readyState)
        if(req.readyState==4 && req.status==200){
            let r=JSON.parse(req.response)
            updateChart(r)
        }
        //Confirmed
    }
    console.log("Fin")
    req.send()

}
function updateChart(data){
    d=data[data.length-1]
    console.log(d)
    dataDiv.innerHTML=`
        <h3>${d.Country}</h3>
        <div>Confirmed: ${d.Confirmed}</div>
        <div>Deaths: ${d.Deaths}</div>
    `
}
function setConutries(data){
    data.forEach(e => {
        let d=document.createElement("div")
        d.setAttribute("id",e.ISO2)
        txt=document.createTextNode(e.Country)
        d.appendChild(txt)
        d.addEventListener("click",updateData)
        d.classList.add("cdiv")
        countriesDiv.appendChild(d)
    });
   

}
req.onreadystatechange=()=>{
    if(req.readyState==4 && req.status==200){
        let r=JSON.parse(req.response)
        setConutries(r)
    }
    
}

req.send()
console.log("Fin!!!!!")



gounane.said@gmail.com