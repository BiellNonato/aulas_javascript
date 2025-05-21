// const pizzaChegou = true;

// const pedido = new Promise((resolve, reject) =>{
//     if(pizzaChegou){
//       resolve("pizza chegou !")
//     } else{
//      reject("pedido cancelado")
//     }
// })

// pedido
//   .then((resposta) =>{
//    console.log(resposta)
//   })
//   .catch((erro) =>{
//    console.log(erro)
//   })

// const promessa = new Promise((resolve,reject)=>{
//     // resolve("tudo certo")

//     reject("algo deu errado")
// })

// promessa
//   .then((res) =>{
//     console.log(res)
//   })

//   .catch((err) =>{
//    console.log(err)
//   })

const verificarResultado = new Promise((resolve,reject) =>{
    let result = 1 + 1;
    
        if(result === 2){
           resolve("uhuuul")
        } else{
            reject("oops! não e o numero 2")
        }
            
})


verificarResultado
  .then((res) =>{
  console.log(res)
  })

  .catch((err) =>{
    console.log(err)
  })

