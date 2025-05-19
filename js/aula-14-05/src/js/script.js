// document.addEventListener("keydown", function(event){

//    event.type // tipo de evento

//    if(event.key === "r"){
//         ("você digitou a tecla A")
//          document.body.style.backgroundColor="red"
//    } else if(event.key === "g"){
//     document.body.style.backgroundColor="green"
//    } else if(event.key === "b")
//     document.body.style.backgroundColor="blue"

//          if(event.key === "ArrowUp"){
//          alert("você digitou a tecla vai corinthians")
//         } else if(event.key === "ArrowRight"){
//             alert("você digitou a tecla direita")
//         } else if(event.key === "ArrowDown"){
//             alert("você digitou a tecla  baixo")
//         } else if(event.key === "ArrowLeft"){
//             alert("você digitou a tecla esquerda")
//         }
        
// })

//  let form = document.getElementById("meuFormulario")

//  form.addEventListener("submit", function(event){
//   event.preventDefault()
//   alert("formulario enviado")
//  })


// let selecionar = document.getElementById("selecionar")
// selecionar.addEventListener("change", function(event){
//   console.log("opção selecionada:" + event.target.value)
// })

// let nome = document.getElementById("seuNome")

// nome.addEventListener("change",function(event){
 
// })


// let cores = document.getElementById("cores")
// let paragrafo = document.getElementById("paragrafo")

// cores.addEventListener("change", function(event){
//  paragrafo.style.color = event.target.value
// })

// ----- menu mobile ////

// let botao = document.getElementById("menu-btn")
// let menu = document.getElementById("menu")

// botao.addEventListener("click", function(){
//   menu.classList.toggle("hidden")
// })

let botao = document.getElementById("menu-toggle")
let menuMobile = document.getElementById("menu-mobile")

botao.addEventListener("click", function(){
  menuMobile.classList.toggle("show")
  botao.classList.toggle("active")
})

