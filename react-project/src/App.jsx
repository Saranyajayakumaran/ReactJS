import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header(){
  return(
    <header>
      <img src="src/assets/react.svg" alt="" />
      <h1>React Essentials</h1>
      <p>
        Fundemental React conceptd you will need for almost any app you are going to build!
      </p>
    </header>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
