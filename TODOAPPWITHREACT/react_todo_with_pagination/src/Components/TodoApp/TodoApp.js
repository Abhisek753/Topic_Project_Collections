import React, { useState } from 'react'

const TodoApp = () => {
  const [input,setInput]=useState("")
  console.log(input)
  const handleChange=(e)=>{
    setInput(e.target.value)
  }
  return (
    <div style={{display:"flex",marginLeft:"30%"}}>
      <div>
      <input placeholder='fill the fields' value={input} onChange={handleChange} />
      <button>Add</button>
      </div>
      <div>
        <h1>{input}</h1>
      </div>
    </div>
    
  )
}

export default TodoApp