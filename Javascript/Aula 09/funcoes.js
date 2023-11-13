function escreva(isso) {
  console.log(isso)
}
let plr = 'Olá Mundo !! Essa é minha primeira (rs) função no javascript'
escreva(plr) 
escreva('Nossa') 
escreva('viu só como funciona ??')
console.clear()

function saudacao(nome, curso='C#') {
  console.log(`Seja bem vinde ao nosso curso de introdução ao curso de ${curso} ${nome}!!`)
}
saudacao('Fernando', 'Javascript')
saudacao('Marilia')

// Para não dar problema de Undefined você pode deixar a variável do parâmetro inicializada e,
// quando não for atribuido um valor à ela no chamamento da função o default será exibido 
console.clear()

function soma(numero1, numero2) {
  return numero1 + numero2
}
const resultado = soma(30, 70)
console.log(resultado)
console.log(resultado/2)

