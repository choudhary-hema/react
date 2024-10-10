import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 tex-black p-4 rounded-xl'>Tailwind</h1>
      <br/>
      <Card username="John" btnText="click me"/>
      <br/>
      <Card username="Dev" btnText="visit me"/>
    </>
  )
}

export default App
