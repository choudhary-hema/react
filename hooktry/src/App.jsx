import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);
  let [errorMessage, setErrorMessage] = useState("");
  //let counter = 5;

  const addValue = () => {
    if(counter < 20) {
      setCounter(counter + 1)
      setErrorMessage("")
    } else {
      setErrorMessage("Can't add as value cannot be more than 20")
    }
  }
  const removeValue = () => {    
    if(counter > 0) {
      setCounter(counter - 1)
      setErrorMessage("")
    } else {
      setErrorMessage("Can't add as value cannot be less than 0")
    }
  }
  return (
    <>
      <h1>React Counter App!</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <h2>{errorMessage}</h2>
      <footer>{counter}</footer>
    </>
  )
}

export default App
