import React from 'react'

const TodoAppList = (e) => {
  const handleDelete=(id)=>{
    e.filter((id)=>{
      return id!=e.id
    })
    console.log("delete")
  }
  const handleToggle=(e)=>{
    console.log("toggle",e.id)
     

  }
  return (
    <div>
       <div key={e.id} style={{display:"flex",border:"2px solid green",alignItems:"center"}}>
            <div style={{display:"flex",marginRight:"10px",alignItems:"center"}} >
               <h1>{e.title}</h1>
               <h4 style={{marginLeft:"10px"}}>{e.status?"Completed":"Not Completed"}</h4>
            </div>
        <button onClick={()=>handleToggle(e)} >Toggle</button>
        <button onClick={()=>handleDelete(e)} >Delete</button>

        </div>
    </div>
  )
}

export default TodoAppList