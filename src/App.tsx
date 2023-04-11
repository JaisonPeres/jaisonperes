import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src="https://avatars.githubusercontent.com/u/7490817?v=4" alt="" width="220px" style={{ borderRadius: '100%'}} />
      <h1>Jaison Peres</h1>
      <div className="card">
        <p>
          Em breve, um site pessoal cheio de coisas legais.
        </p>
      </div>
      <p className="read-the-docs">
        <a href='https://www.linkedin.com/in/jaison-cperes/' target='_blank'>linkedin.com/in/jaison-cperes</a>
      </p>
      <p className="read-the-docs">
        <a href='https://github.com/JaisonPeres' target='_blank'>github.com/JaisonPeres</a>
      </p>
    </div>
  )
}

export default App
