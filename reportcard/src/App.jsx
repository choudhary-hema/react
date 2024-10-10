import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const employees =[
      {
        "id" : 1,
        "name" : "Sam",
        "age" : 43
      },
      {
        "id" : 2,
        "name" : "Patrik",
        "age" : 25
      },
      {
        "id" : 3,
        "name" : "Samuel",
        "age" : 30
      }
    ]
    
  const [empdata, setEmployees] = useState(employees)

  const updateEmployeeDetails = (event) => {
    if (event.target.id == "empname") 
    setEmployees(event.target.value)
  }
  return (
    <>
    
    <div>
      <table> 
        <th>Name</th><th>Age</th><th>Location</th>
        <tr>
          <td><input type="text" value={empdata[0].name} id="empname" onChange={updateEmployeeDetails}/></td>
          <td><input type="text" value={empdata[0].age}/></td>
        </tr>     
        <tr>
          <td><input type="text" value={empdata[1].name}/></td>
          <td><input type="text" value={empdata[1].age}/></td>
        </tr>
        <tr>
          <td><input type="text" value={empdata[2].name}/></td>
          <td><input type="text" value={empdata[2].age}/></td>
        </tr>

      </table>
      </div>
    </>
  )
}
export default App
