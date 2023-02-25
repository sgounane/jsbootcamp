let countriesDiv=document.querySelector("#countriesDiv")
let dataDiv=document.querySelector("#dataDiv")
const ctx = document.getElementById('myChart');
let req=new XMLHttpRequest()

let chart=new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Confirmed',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.01,
        pointRadius:0
      },
      {
        label: 'Active',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 2)',
        tension: 0.01,
        pointRadius:0
      }
    ]
    }
  });

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
    d1=data[data.length-1]
    dataDiv.innerHTML=`
        <h3>${d1.Country}</h3>
        <div>Confirmed: ${d1.Confirmed}</div>
        <div>Active: ${d1.Active}</div>`
    const c=data.map(e=>e.Confirmed)
    const m=data.map(e=>e.Active)
    const d=data.map(e=>new Date(e.Date).getDate())
    chart.data.labels=d;
    chart.data.datasets[0].data=c;
    chart.data.datasets[1].data=m;
    chart.update();

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
