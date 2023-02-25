let etudiant={
    nom: "Mohammed",
    age: 24,
    direbonjour: function(){
        console.log("Bojour!!")
        return 13
    }
}
nom=etudiant.nom
age=etudiant.age
d=etudiant.direbonjour()
console.log(nom,age,d) 

//object factory
// function createStudent(nom,prenom,age){
//     let ob={}
//     ob.nom=nom;
//     ob.prenom=prenom
//     ob.age=age;
//     ob.direbonjour=function(){
//         console.log(`nom: ${ob.nom}
//         prenom: ${ob.prenom}
//         age: ${ob.age}`)
//     }
//     return ob;
// }
// nom=prompt("nom: ")
// prenom=prompt("Prenom: ")
// age=Number(prompt("age: "))
// e1=createStudent(nom,prenom, age)
// console.log(e1)

//NEW
function createStudent(nom,prenom,age){
    this.nom=nom;
    this.prenom=prenom;
    this.age=age;
}
createStudent.prototype.direbonjour=function(){console.log("Bonjour "+this.nom)}

//Class
class Etudiant{
    constructor(nom,prenom,age,notes){
        this.nom=nom;
        this.age=age;
        this.prenom=prenom;
        this.notes=notes
    }
    direbonjour(){
        console.log("Bonjour")
    }
    calculMoy(){
        let s=0;
        for(let i=0;i<this.notes.length;i++) {
            s=s+this.notes[i]
        }
        this.moy=s/this.notes.length;
        
    }
}

class Leader extends Etudiant{
    constructor(nom,prenom,age, notes,badge){
        super(nom,prenom,age,notes)
        this.badge=badge
    }
    grade(){
        console.log(this.badge)
    }
}




