function simularDownload(nomeArquivo, callbackConclusao) {
    console.log(`Iniciando download de [${nomeArquivo}]...`);
    setTimeout(() => {
        callbackConclusao();
    }, 1500);
}
simularDownload("dados_clientes.csv", () => {
    console.log("Dowload finalizado com sucesso no disco!");
});
console.log("[Node.js] Linha seguinte executada imediatamente sem travar!");