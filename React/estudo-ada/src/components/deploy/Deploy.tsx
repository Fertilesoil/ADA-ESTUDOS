import { useEffect, useState } from 'react'

export default function Deploy() {

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
      const resultadoFinal = await resultado.json()
      return resultadoFinal
    }
    buscarDados().then(res => setTarefas(res))
  }, [])

  return (
    <div className='min-h-[100vh] w-full bg-slate-800'>
      <h1 className="text-[2rem] text-slate-400 font-[800] w-full text-center">Fetch</h1>

      <div className="flex flex-col justify-center items-center p-4 gap-8 mt-[2rem] bg-slate-800 shadow-lg">
        {tarefas.map((tarefa) => {
          return (
            <div className='flex justify-between bg-rose-200 w-[60%] p-4 rounded-lg text-pink-800 shadow-lg shadow-orange-100' key={tarefa.id}>
              <p>{tarefa.id} - </p>
              <p>{tarefa.title}</p>
            </div>
          )
        })}
      </div>

      <div className='bg-slate-800 min-h-[2rem]'>

      </div>
    </div>
  )
}

