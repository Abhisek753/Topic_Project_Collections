import React from 'react'

const TodoList = ({title,id,body}) => {
  return (
    <div key={id} style={{ border:"2px solid blue"}}>
        <h3>{`id:${id}`}</h3>
        <h1 style={{color:"yellow"}}>{title}</h1>
        <h2>{body}</h2>
    </div>
  )
}

export default TodoList