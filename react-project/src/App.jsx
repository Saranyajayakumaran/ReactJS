import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

function Header(){
  return(
    <header>
      <img src={reactLogo}  alt="React Logo" />
      <img src={viteLogo} alt="Vite Logo" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concept you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
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
