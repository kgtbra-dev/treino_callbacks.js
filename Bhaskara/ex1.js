function bhaskara(a, b, c,  CallbackDividir) {
    const x = b * (-1) + Math.sqrt (b ** 2 - 4 * a * c);
    const total = CallbackDividir (x, (2 * a));
    return total
};

function dividir(a, b) {
    return a / b
};
console.log(bhaskara(-1, 6, 7, dividir));