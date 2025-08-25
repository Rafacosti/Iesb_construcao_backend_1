let { CalculadoraNotaA1, CalculadoraNotaA2, calculadoraNotaFinal } = require('./CalculadoraNota.js')

let nome = "Rafael" 

console.log("Calculando Nota A1")
let exercicioA1 = parseFloat() 
let trabalhoA1 = parseFloat()
let provaA1 = parseFloat()
let notaA1 = CalculadoraNotaA1(exercicioA1, trabalhoA1, provaA1)

console.log("Nota A1 calculada: " + notaA1)
console.log("### finalizado calcula Nota A1 ###")

console.log("calculando Nota A2")

let exercicioA2 = parseFloat() 
let trabalhoA2 = parseFloat()
let provaA2 = parseFloat()
let notaA2 = CalculadoraNotaA2(exercicioA2, trabalhoA2, provaA2) 

console.log("Nota A2 calculada: " + notaA2)
console.log("### finalizado calcula Nota A2 ###")

console.log("### calculando Nota Final ###")
let media = calculadoraNotaFinal(notaA1, notaA2)

console.log("media final: " + media)

if (media >= 5) {
    console.log("Parabéns " + nome + ", você passou caraii!!")
} else {
    console.log(nome + " voce rodou parceiro, se lasque!!")
}