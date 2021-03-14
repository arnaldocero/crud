import { isEmpty } from 'lodash'
import React,{useState} from 'react'
import shortid from 'shortid'

function App() {
  const [taks,setTaks]=useState("")
  const [takss,setTakss]=useState([])
  const addtaks=(e)=>{
e.preventDefault()
if(isEmpty(taks)){
  console.log("task empty")
  return
}

const newTaks={
  id:shortid.generate(),
  name:taks
}
setTakss([...takss,newTaks])
setTaks("")
  }
  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
              <h4 className="text-center">Lista de Tareas</h4>
              <ul className="list-group">
                {
                  takss.map((taks)=>(
                  <li className="list-group-item" key={taks.id}>
                    <span className="load">{taks.name}</span>
                    <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                    <button className="btn btn-warning btn-sm float-right">Editar</button>
                  </li>
                  ))
                  
                }
               
              </ul>
        </div>
        <div className="col-4">
        <h4 className="text-center">Formulario</h4>
        <form onSubmit={addtaks}>
          <input 
          type="text" 
          className="form-control mb-2"
          placeholder="Ingrese la tarea"
          onChange={(text)=>setTaks(text.target.value)}
          value={taks}
            />
          <button className="btn btn-dark btn-block" type="submit">Agregar</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default App;
