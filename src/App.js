import { isEmpty, size } from 'lodash'
import React,{useState} from 'react'
import shortid from 'shortid'

function App() {
  const [taks,setTaks]=useState("")
  const [takss,setTakss]=useState([])
  const[editMode,setEditMode]=useState(false)
  const [id, setId] = useState("")
  const [error, seterror] = useState(null)

  const valiForm=()=>{
    let isValid=true
    seterror(null)
    if(isEmpty(taks)){
      seterror("Ingrasar una tarea")
      isValid=false
    }
    return isValid
  }
  const addtaks=(e)=>{
e.preventDefault()
if(!valiForm())
{
  return
}

const newTaks={
  id:shortid.generate(),
  name:taks
}
setTakss([...takss,newTaks])
setTaks("")
  }

  const savetaks=(e)=>{
    e.preventDefault()
    if(!valiForm())
{
  return
}
    
    
    const editedtakss=takss.map(item => item.id === id ? {id, name: taks}: item)
    
    setTaks(editedtakss)
    setEditMode(false)
    setTaks("")
    setId("")
      }
  const deletetaks=(id)=>{
    const filteredtaks=takss.filter(taks=>taks.id !== id)
    setTakss(filteredtaks)

  }
  const editTaks=(ithetask)=>{
    setTaks(ithetask.name)
    setEditMode(true)
    setId(ithetask.id)
  }
  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
              <h4 className="text-center">Lista de Tareas</h4>
{
  size(takss)===0 ?(
    <li className="list-group-item">Aun No hay tareas</li>
  ):(
    <ul className="list-group">
                {
                  takss.map((taks)=>(
                  <li className="list-group-item" key={taks.id}>
                    <span className="load">{taks.name}</span>
                    <button 
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={()=>deletetaks(taks.id)}>
                      Eliminar
                      </button>
                    <button 
                    className="btn btn-warning btn-sm float-right"
                    onClick={()=>editTaks(taks)}>
                      Editar
                      </button>
                  </li>
                  ))
                  
                }
               
              </ul>

  )
              
              }
        </div>
        <div className="col-4">
        <h4 className="text-center">{editMode ?"Editar tarea":"Agregar tarea"}</h4>
        <form onSubmit={editMode? savetaks: addtaks}>
        {
              error && <span className="text-danger mb 2">{error}</span>
            }
          <input 
          type="text" 
          className="form-control mb-2"
          placeholder="Ingrese la tarea"
          onChange={(text)=>setTaks(text.target.value)}
          value={taks}
            />
           
          <button className={editMode? "btn btn-warning btn-block":"btn btn-dark btn-block"} type="submit">{editMode? "Guardar": "Agregar"}</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default App;
