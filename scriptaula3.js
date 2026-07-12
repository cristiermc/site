console.log("Inicio da execução");

function buscaDadosServidor (){
    //codigo que busca os dados do servidor
    return new Promise((resolve,reject) => {
        console.log("Buscando dados no servidor");

        setTimeout(()=>{
            let sucesso = Math.random() > 0.5;

            if(sucesso){
                resolve("Dados recebidos com sucesso");
            } else {
                reject("Falha ao buscar dados")
            }
        }, 2000);
    })
}

buscaDadosServidor().then((mensagem) => {
    console.log(mensagem);
}).catch((erro) =>{
    console.error(erro);
});

console.log("Fim da execução");