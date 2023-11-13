const input = require('readline-sync')

// let nota = Number(input.question('Informe a nota: '))

console.clear()

// Acumulador: essa é nossa variável que acumula a cada volta do laço para podermos fazer
// os cálculos necessários
let acumulador = 0
acumulador += 10
acumulador--
console.log(acumulador)

console.clear()


let nota
let soma = 0 

// For
for (let i = 1; i <= 3; i++) {
  nota = Number(input.question(`Informa a nota ${i} do aluno: `))
  soma += nota
}

console.log(`A média do aluno é ${Math.round(soma/3)}`)