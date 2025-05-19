function processarDados(callback){
        setTimeout(() =>{
            console.log("dados processados")
            callback()
        }, 2000)
}


function processando(){
    console.log("mostrando resultado na tela")
}

console.log("processando dados")

processarDados(processando)