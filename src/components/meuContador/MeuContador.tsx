import { useState } from 'react'



export default function MeuContador() {

  const [contador, setContador] = useState(0)

  function incremento() {
    setContador(contador + 1)
  }

  function decremento() {
    setContador(contador - 1)
  }

  if (contador > 5) {
    return (
      <div>
        <h2>Contador maior que 5</h2>
        <h3>{ contador }</h3>
        <button className="rounded-lg bg-pink-600 p-2 text-white" onClick={incremento}>Incremente Aqui</button>
        <button className="rounded-lg bg-pink-600 p-2 text-white" onClick={decremento}>Decremente Aqui</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Meu Contador</h1>
      {contador === 0 || contador <= 2 ? <h2>Valor muito baixo !!</h2> : ('')}
      <h3>{contador}</h3>
      <button className="rounded-lg bg-pink-600 p-2 text-white" onClick={incremento}>Incremente Aqui</button>
      <button className="rounded-lg bg-pink-600 p-2 text-white" onClick={decremento}>Decremente Aqui</button>
    </div>
  )
}

