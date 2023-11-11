let primeiroNumero = 50
let segundoNumero = 62

const soma = primeiroNumero + segundoNumero 
const subtracao = primeiroNumero - segundoNumero 
const divisao = primeiroNumero / segundoNumero
const multiplicacao = primeiroNumero * segundoNumero
const resto = segundoNumero % segundoNumero

console.log('Soma: ' , soma)
console.log('Subtração: ' , subtracao)
console.log('Divisao: '+ Math.round(divisao))
console.log('Multiplicação: '+ multiplicacao)
console.log(`O resto da divisão é: ${resto}`)