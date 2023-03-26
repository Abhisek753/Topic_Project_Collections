import React, { useEffect, useState } from 'react'
import axios from "axios"
import TodoList from './TodoList'
const Todo = () => {
const [state,setState]=useState(0)
const [data,setdata]=useState([])
const [page,setPage]=useState(1)
const getData=async(page)=>{
    console.log(page)
  let res=await  axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=8`)
 
 let data= await res.data
  setdata(data)
}
useEffect(()=>{
    getData(page)
},[page])
const handlesubmit=()=>{
    setState((pre)=>pre+1)
}
console.log(data)

  return (
    <div>
      <button onClick={handlesubmit}>ADD</button>
      <h1>count:{state}</h1>
      <h1>post Item</h1>

      <div style={{ border:"2px solid teal",display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
         {data&& data.map((el)=>(
            <div >
            <TodoList {...el}/>

            </div>
         ))}
      </div>
      <div style={{display:"flex",marginLeft:"50%"}}>
        <button onClick={()=>setPage(pre=>pre-1)} >pre</button>
        <button>{page}</button>
        <button  onClick={()=>setPage(pre=>pre+1)} >next</button>
      </div>
  
    </div>
  )
}

export default Todo