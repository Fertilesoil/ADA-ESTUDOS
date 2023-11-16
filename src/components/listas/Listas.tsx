import { useState, useEffect } from 'react'

const minhaLista = [
  { id: '1', value: 'Fruta' },
  { id: '2', value: 'Legume' },
  { id: '3', value: 'Carne' },
]
export default function Listas() {

  const [produtos, setProdutos] = useState(minhaLista)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(
    () => {
      if (pesquisa) {
        const novaLista = minhaLista.filter((item) => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        })
        setProdutos(novaLista)
      } else {
        setProdutos(minhaLista)
      }
    },[pesquisa])



  return (
    <>
      <h1 className="text-[2rem] text-slate-600 font-[800] w-[20rem] text-center">Efeitos Colaterais</h1>
      <h2 className="text-[2rem] text-slate-600 font-[800] w-[20rem] text-center">Listas no React</h2>

      <input placeholder='Pesquise Aqui'
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)} />
      
      {produtos.map((chorume) => {
        return (
          <div className="bg-pink-700 text-white w-[30vh] text-center flex flex-col p-2" key={chorume.id}>
            <h4>{chorume.value} </h4>
          </div>
        )
      })}
    </>
  )
}
