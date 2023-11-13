

const input = require('readline-sync')
const sorteio = 5
let numero = Number(input.question('Qual número você escolhe ?? '))



while (numero !== sorteio) {
  console.log('Você errou, tente novamente')
  numero = Number(input.question('Qual número você escolhe ?? '))
} 

console.log('Você acertou meu bem !!')