import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Jaison Peres</h1>
      <div className="card">
        <p>
          Em breve, um site pessoal cheio de coisas legais.
        </p>
      </div>
      <p className="read-the-docs">
        <a href='https://www.linkedin.com/in/jaison-cperes/' target='_blank'>linkedin.com/in/jaison-cperes</a>
      </p>
    </div>
  )
}

export default App
