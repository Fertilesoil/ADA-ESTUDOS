const arr1 = [30, 12, 25, 49, 34]
let arr2 = []

// Métodos de arrys é um conceito novo para mim, vamos assimilar mais conhecimento agora
// Na verdade não é novo não, são métodos de manipulação dos dados

// Primeiro método é o Slice onde você pega uma parte específica do array passando dois parâmetros,
// um para o início e outro onde vai parar a exibição. Lembre-se que o parâmetro final não entra
// na contagem, ele não será exibido. Se passar apenas um parâmetro ele vai de onde você iinformou 
// até o fim do array

console.log(arr1.slice(0, 2))
console.clear()

// Métodos de Adição no array   Push || Unshift

arr2.push(12, 'Eu to bem aqui no fim do mundo')
console.log(arr2)
arr2.unshift(73)
console.log(arr2)
console.clear()

// Métodos de Exclusão no array   Pop || Shift

arr2.pop()
console.log(arr2)
arr2.shift()
console.log(arr2)
console.clear()

// Método de concatenação de arrays

console.log('arr1 ', arr1)
console.log('arr2 ', arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))
console.clear()

// Métodos de busca   IndexOf  || LastIndexOf

console.log(arr1)
let indiceElemento = arr1.indexOf(34)
console.log(indiceElemento)

let arr3 = [1, 2, 3, 3, 3]
console.log(arr3)
let ultimoIndiceElemento = arr3.lastIndexOf(3)
console.log(ultimoIndiceElemento)
console.log(arr3.lastIndexOf(3))
console.clear()

// Descobrindo se existe um elemento no array   Includes

console.log(arr1)
console.log(arr1.includes(13))
console.log(arr1.includes(12))
console.clear()

// Inversão de arrays   Reverse

console.log(arr1)
let reverse = arr1.reverse()
console.log(arr1.reverse())
console.log(reverse)
