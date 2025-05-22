let conselho= document.getElementById("conselho")

conselho.addEventListener("click", function(event){
  event.preventDefault()
  fetch(`https://api.adviceslip.com/advice`)
  .then((res) => res.json())
  .then((data) => {
    
  })
  .catch((err) => console.log(err))
})