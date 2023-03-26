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
    
  

  console.log(todo)
  return (
    <div >
      <div style={{display:"flex",marginLeft:"30%"}}>
      <input placeholder='fill the fields' value={input} onChange={handleChange} />
      <button onClick={handleSubmit} >Add</button>
      </div>
      <div>
        {todo.map((e)=>(
         <TodoAppList {...e}/>
            
        ))}
      </div>
    </div>
    
  )
}

export default TodoApp