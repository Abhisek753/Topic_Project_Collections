import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addAction,reduceAction} from "../redux/action"
const Redux_counter = () => {
 
  const counter =useSelector((store)=>{
    console.log(store)
    return store.count
  })
  const dispatch=useDispatch()



  const handleAdd=()=>{
      dispatch(addAction(1))
  }
  const handleReduce=()=>{
    dispatch(reduceAction(1))
}
 

  return <div>
         <div>
        <h1>hii we are here</h1>
        <h1>Counter:{counter}</h1>
        <button onClick={handleAdd} >Add</button>
        <button onClick={handleReduce} >Reduce</button>

        </div>
    </div>
  
}

export default Redux_counter










