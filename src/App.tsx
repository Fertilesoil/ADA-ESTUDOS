import Deploy from "./components/deploy/Deploy"

function App() {

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="text-[2rem] text-slate-600 font-[800] w-[20rem] text-center">Hello World</h1>
      <Deploy />
    </div>
  )
}

export default App
