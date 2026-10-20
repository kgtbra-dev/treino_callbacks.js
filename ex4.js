function processarTexto(texto, callbackModificadora) {
    callbackModificadora(texto);
}

processarTexto("senai valinhos", (texto) => {
    console.log(texto.toUpperCase());
}) 