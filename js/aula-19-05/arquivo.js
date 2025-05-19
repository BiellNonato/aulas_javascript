function baixarArquivo(callback){
    setTimeout(() =>{
        console.log("baixando arquivo")
        console.log("download concluido")
        callback()
    }, 3000)
}

function abrir(){
    console.log("abrindo arquivo")
}

baixarArquivo(abrir)

