import React, { useState } from 'react'
import { store } from '../redux/store'
import { ADD, REDUCE } from '../redux/actionTypes'
const Redux_counter = () => {
  const[re,setRe]=useState("")
  console.log(store)
const  {getState,dispatch,subscribe}=store

  console.log("redux counter",getState())

  const handleAdd=()=>{
      dispatch({type:ADD,payload:1})
  }
  const handleReduce=()=>{
    dispatch({type:REDUCE,payload:1})
}
  subscribe(()=>{
    setRe(re=>re+1)
  })

  return <div>
         <div>
        <h1>hii we are here</h1>
        <h1>{getState().count}</h1>
        <button onClick={handleAdd} >Add</button>
        <button onClick={handleReduce} >Reduce</button>

        </div>
    </div>
  
}

export default Redux_counter