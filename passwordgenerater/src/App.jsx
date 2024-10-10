import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowCharacters, setAllowCharacters] = useState(false);
  const [password, setPassword] = useState("");
  
  const passwordRef = useRef(null);

  const generatePassword = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (allowNumbers) str += "0123456789"
      if (allowCharacters) str += "!@#$%^&*-_+=[]{}~`"

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)      
      }
      setPassword(pass)
      
    }
    , [length, allowNumbers, allowCharacters])
    const copytoclipboard = useCallback(
      () => {
       passwordRef.current?.select()
       window.navigator.clipboard.writeText(password)
        
      }, [password])
    
    //const allowNumbers = str + 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    //const allowNumbers = str + 'EFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    useEffect(()=> generatePassword(), [length, allowNumbers, allowCharacters, generatePassword])

  return (
    <>
     
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input  type="text"  value={password}  className="outline-none w-full py-1 px-3"  placeholder="Password" 
            ref = {passwordRef} readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copytoclipboard}
            >copy</button>  
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" value={length} className='cursor-pointer' min={6} max={36}
              onChange={e => (setLength(e.target.value))}
            />
              <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={allowNumbers} id="numberInput" 
         onChange={() => setAllowNumbers(prev => !prev)}/>
        <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={allowCharacters} id="characterInput" 
              onChange={() => setAllowCharacters(prev => !prev)}/>
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default App
