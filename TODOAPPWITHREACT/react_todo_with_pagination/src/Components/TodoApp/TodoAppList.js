import React from 'react'

const TodoAppList = ({title,id,status,handleDelete,handleToggle}) => {
//all item id
// console.log(id)

  return (
    <div>
       <div key={id} style={{display:"flex",alignItems:"center"}}>
            <div style={{display:"flex",marginRight:"10px",alignItems:"center"}} >
               <h1 style={{color:"red"}}>{title}</h1>
               <h4 style={{marginLeft:"10px"}}>{status?"Completed":"Not Completed"}</h4>
            </div>
        <button onClick={()=>handleToggle(id)} >Toggle</button>
        <button onClick={()=>handleDelete(id)} >Delete</button>

        </div>
    </div>
  )
}

export default TodoAppList