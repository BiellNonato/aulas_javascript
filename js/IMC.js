let peso = 40
let altura = 1.70

let imc = peso / (altura * altura)

if(imc <18.5){
console.log("abaixo do peso normal")
} else if(imc == 24.9){
    console.log("peso normal")
} else if(imc == 29.9){
    console.log("excesso de peso")
} else if(imc == 34.9){
    console.log("obesidade classe 1")
} else if(imc == 39.9){
    console.log("obesidade classe")
} else if(imc >= 40.0){
    console.log("obesidade classe 3")
}
