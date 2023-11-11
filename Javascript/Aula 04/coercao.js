// Coerção de tipos nada mais é do que conversão de tipo, o que a gente já viu lá nas aulas
// de typescript e sabemos porque existe essa extensão, esse complemento do javascript

const numero = 10

console.log(typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(typeof numeroEmFormatoDeString)

// Para converter manualmente fazemos dessa forma, chamamos String (em maiúsculo)
// e passamos nosso parametro que ele converte explicitamente, se não for definido
// antes ele converte implicitamente

console.log(Number('123456'))
console.log(parseFloat('53.40'))
console.log(parseInt('53.40'))
console.log(Boolean(0))

// console.clear()

console.log(10 + 1)
console.log(10 + '1')

// Veja que ele está concatenando no segundo cenário mas, por conflito, ele opta por converter
// implicitamente tudo para string, e quando existe uma operação diferente de soma ele 
// subentenderá que é number
