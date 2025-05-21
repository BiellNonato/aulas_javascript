let buttom = document.getElementById("btn-cep")


buttom.addEventListener("click", function(event){
 let cep = document.getElementById("input_cep").value
  event.preventDefault()
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
})