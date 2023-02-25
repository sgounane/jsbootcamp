let root=document.querySelector("#root")
let students=[
    {
        id:1,
        nom: "yhay",
        prenom:"yahya",
        age: 24,
    },
    {
        id:2,
        nom: "Mouradi",
        prenom:"said",
        age: 21,
    },
    {
        id:3,
        nom: "nouri",
        prenom:"mourad",
        age: 24,
    },
    {
        id:4,
        nom: "achraf",
        prenom:"achraf",
        age: 22,
    },
    {
        id:1,
        nom: "yhay",
        prenom:"yahya",
        age: 24,
    },
    {
        id:2,
        nom: "Mouradi",
        prenom:"said",
        age: 21,
    },
    {
        id:3,
        nom: "nouri",
        prenom:"mourad",
        age: 24,
    },
    {
        id:4,
        nom: "achraf",
        prenom:"achraf",
        age: 22,
    },

]
let str=""

for( let s of students)
    str+=`<div class="box">
            <img src='https://robohash.org/${s.id}'/>
            <p>Nom: ${s.nom}</p>
            <p>Age: ${s.age}</p>
        </div>`
root.innerHTML=str