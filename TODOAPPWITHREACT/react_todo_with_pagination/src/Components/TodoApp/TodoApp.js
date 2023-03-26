import React, { useState } from 'react'
import TodoAppList from './TodoAppList';

const TodoApp = () => {
  const [input,setInput]=useState("");
  const [todo,setTodo]=useState([])
  // console.log(input)
  const handleChange=(e)=>{
    setInput(e.target.value)
  }

  const handleSubmit=()=>{
    const newtodo={
      title:input,
      status:false,
      id: Math.random()+ Date.now()
    }
    setTodo([...todo,newtodo])
    setInput("")
  }
    
  //delete and toggle
  const handleDelete=(id)=>{
   let filtertodo=todo.filter((el)=>{
       return el.id!=id
   })
    setTodo(filtertodo)
    console.log("delete")
  }
  const handleToggle=(id)=>{
    console.log("toggle",id)
     const afterupdateTodo=todo.map((ele)=>{
      return ele.id===id?{...ele,status:!ele.status}:ele;
     })
    setTodo(afterupdateTodo)
  }
  console.log(todo)


  return (
    <div style={{display:"flex",width:"70%",alignItems:"center",flexDirection:"column",border:"1px solid red",margin:"auto"}}>
      <div style={{display:"flex",}}>
      <input  style={{width:"300px",height:"40px",fontSize:"large"}} placeholder='fill the fields' value={input} onChange={handleChange} />
      <button onClick={handleSubmit} >Add</button>
      </div>
      <div >
        {todo.map((e)=>(
         <TodoAppList {...e} handleDelete={handleDelete} handleToggle={handleToggle} />
            
        ))}
      </div>
    </div>
    
  )
}

export default TodoApp