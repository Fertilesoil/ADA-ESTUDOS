let arr = ['Fernando', 1.74, 27, 90]

console.log(arr)
// Para imprimir campos específicos nada muda, só pegar o índice
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
// Para imprimir o tamanho do array você pode usar o lenght
console.log(arr.length)

console.clear()

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + ' |')
}

console.clear()

// E esse é o nosso querido e amado foreach, essa é a sintaxe no javascript

for (let elemento of arr) {
  console.log(elemento + ',')
}

console.clear()

// Olha só que legal, o forof percorre os valores de cada elemento dentro de um array o forin
//  percorre a posição de cada um, conta seus índices e não seus valores. Muito interessante
// Você pode também acessar o valor de dentro do indice passando o array e a posição atual dele

for (let variavel in arr) {
  console.log(variavel, arr[variavel])
}

