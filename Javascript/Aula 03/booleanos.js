let idade = 17

console.log(idade >= 18)
console.log(idade <= 18)
console.log(idade === 18)
console.log(idade == 18)
console.log(idade != 17)
console.log(idade != 18)
console.log(idade !== 18)
console.log(idade != '17')
console.log(idade !== '17')

idade = 25
let tenhoCnh = true
const possoDirigir = idade >= 18 && tenhoCnh === true 

console.log(`Posso dirigir ?? A resposta é: ${possoDirigir}`)

idade = 40
const votoFacultativo = idade < 16 || idade >= 70 
console.log(`O voto é facultativo na minha idade ?? ${votoFacultativo}`)

const estouGostandoDoCurso = false
console.log(!estouGostandoDoCurso)