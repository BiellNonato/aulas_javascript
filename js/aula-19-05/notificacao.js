function enviarNotificacao(callback){
    setTimeout(() =>{
      console.log("notificação enviada")
      callback()
    }, 1500)
}


function enviar(){
    console.log("confirmação: notificação entregue")
}

console.log("enviando notificação")

enviarNotificacao(enviar)