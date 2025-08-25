function CalculadoraNotaA1(exercicio,trabalho,prova) {
    return exercicio + trabalho + prova;
}

function CalculadoraNotaA2(exercicio,trabalho,prova) {
    return exercicio + trabalho + prova;
}

function calculadoraNotaFinal (NotaA1,NotaA2) {
    return (NotaA1 * 0.4) + (NotaA2 * 0.6);
}

module.exports = {
    CalculadoraNotaA1,
    CalculadoraNotaA2,
    calculadoraNotaFinal
}