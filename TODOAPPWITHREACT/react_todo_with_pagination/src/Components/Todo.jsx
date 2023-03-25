import React, { useEffect, useState } from 'react'
import axios from "axios"
import TodoList from './TodoList'
const Todo = () => {
const [state,setState]=useState(0)
const [data,setdata]=useState([])
const [page,setPage]=useState(1)
const getData=async()=>{
  let res=await  axios.get("https://jsonplaceholder.typicode.com/posts")
 
 let data= await res.data
  setdata(data)
}
useEffect(()=>{
    getData()
},[])
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
  
    </div>
  )
}

export default Todo