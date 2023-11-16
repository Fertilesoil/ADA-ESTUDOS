import { useEffect, useState } from 'react'

const tarefa = [
  { id: '1', title: 'Minha Tarefa' },
  { id: '2', title: 'Minha Tarefa 2' },
  { id: '3', title: 'Minha Tarefa 3' },
  { id: '4', title: 'Minha Tarefa 4' },
]

function Fetch() {

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
    <div className='h-[100vh]'>
      <h1 className="text-[2rem] text-slate-600 font-[800] w-full text-center">Fetch</h1>
      <ol className="list-decimal flex flex-col justify-center items-center gap-3 bg-stone-300">
        {tarefas.map((tarefa) => {
          return (
              <li key={tarefa.id}>
                {tarefa.title}
                {tarefa.completed ? (<span> - Tarefa Concluída</span>) : ('')}
              </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Fetch