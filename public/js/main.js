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

// let touch = [sept[1],sept[5],sept[9],sept[13]]

// touch = true


for (let index = 0; index < sept.length; index++) {
    sept[index].addEventListener("click", ()=>{
        if (ecran.value == "" && ["+", "*", "/",".","-"].includes(sept[index].value)) {
            return 
        } else {
            ecran.value = ecran.value + sept[index].innerText
            // if (ecran.value == sept[index].innerText && ["+", "*", "/" ,".","-"].includes(sept[index])) {
            //     alert("wayaw")
            // } else {    

            // }
        }
    })
}
 

let reponse
let infin


        egal.addEventListener("click", () => {
            reponse = ecran.value.toString()
            infin = eval(reponse)
            ecran.value = infin
            
        })

        reset.addEventListener("click", () => {
            ecran.value = ""
        })
