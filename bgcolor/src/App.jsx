import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-screen h-screen duration-200" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
         <div className='justify-center rounded-xl'>
          <button className="rounded-xll" style={{backgroundColor:"red"}} onClick={()=>setColor("Red")}>Red</button>
          <button className="rounded-xll" style={{backgroundColor:"yellow"}} onClick={()=>setColor("Yellow")}>Yellow</button>
          <button className="rounded-xll" style={{backgroundColor:"green"}} onClick={()=>setColor("Green")}>Green</button>
          <button className="rounded-xll" style={{backgroundColor:"orange"}} onClick={()=>setColor("Orange")}>Orange</button>
          <button className="rounded-xll" style={{backgroundColor:"indigo"}} onClick={()=>setColor("Indigo")}>Indigo</button>
          <button className="rounded-xll" style={{backgroundColor:"purple"}} onClick={()=>setColor("Purple")}>Purple</button>
         </div>
      </div>      
      </div>
    </>
  )
}

export default App
