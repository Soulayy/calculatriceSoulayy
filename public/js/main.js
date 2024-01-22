let ecran = document.querySelector("input")

let reset = document.querySelector("#ac")
let divition = document.querySelector("#diviser")

let sept = document.querySelectorAll("button")
// let huit = document.querySelectorAll("button")[3]
// let neuf = document.querySelectorAll("button")[4]
// let foix = document.querySelectorAll("button")[5]
// let quatre = document.querySelectorAll("button")[6]
// let cinq = document.querySelectorAll("button")[7]
// let six = document.querySelectorAll("button")[8]
// let division = document.querySelectorAll("button")[9]
// let un = document.querySelectorAll("button")[10]
// let deux = document.querySelectorAll("button")[11]
// let trois = document.querySelectorAll("button")[12]
// let multiplication = document.querySelectorAll("button")[13]
// let zero = document.querySelector("#zero")
let egal = document.querySelector("#egal")

console.log(sept);

for (let index = 0; index < sept.length; index++) {
    sept[index].addEventListener("click", ()=>{
        ecran.value = ecran.value + sept[index].innerText
    })
}
 
let reponse
let infin
egal.addEventListener("click", () => {
    reponse = ecran.value.toString()
    console.log(reponse);
    infin = eval(reponse)
    console.log(infin);
    ecran.value = infin
    
})