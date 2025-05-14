// -------- selecionando pelo id -------
// let titulo =  document.getElementById("titulo")

// console.log(titulo)

// let p1 = document.getElementById("paragrafo")

// console.log(p1)

// let p2 = document.getElementById("paragrafo2")

// console.log(p2)

// let titulo = document.getElementById("titulo2")

// console.log(titulo)

// let p3 = document.getElementById("paragrafo3")

// console.log(p3)

// let strong = document.getElementById("strong")

// console.log(strong)

// selecionando pela classe ---------

// let p_text = document.getElementsByClassName("p-text")

// console.log(p_text )

// -------- manipulaçao do DOM ----------

// let titulo = document.getElementById("titulo")

// titulo.innerText = "bem vindo ao javascript"

// let p1 = document.getElementById("paragrafo")

// p1.innerText = "troquei novamente"

// let p2 = document.getElementById("paragrafo2")

// p2.innerText = "vai corinthians"

// let p_text = document.getElementsByClassName("p-text")
// p_text[0].innertext = "teste"


let titulo = document.getElementById("titulo")
titulo.innerText = "bem vindo ao nada"
titulo.style.color = "red"
titulo.style.backgroundColor = "green"

let p_aviso = document.getElementById("aviso-importante")

// p_aviso.classList.add("aviso")

p_aviso.classList.remove("aviso")