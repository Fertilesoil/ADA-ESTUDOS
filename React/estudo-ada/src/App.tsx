import First_Comp from "./components/first_comp/First_Comp"

function App() {

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="text-[2rem] text-slate-600 font-[800] w-[20rem] text-center">Hello World</h1>
      <First_Comp conteudo='nossa nossa hein' />
    </div>
  )
}

export default App
