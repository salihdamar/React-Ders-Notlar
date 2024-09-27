import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let isimler= ["Elif","Salih","Damar","Hakan"]
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Salih Damar</h1>
      <div className="card">
        <button style={{backgroundColor:"lightblue"}} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {
        isimler.map((v,i)=>(
          <div style={{backgroundColor:'lightcoral',textAlign:'left',padding:5,border:'1px solid lightgray' , }} key={i}>
            {v}
          </div>

        ))
      }

      
    </>
  )
}
export default App
