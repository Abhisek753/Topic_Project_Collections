import React, { useReducer, useState } from 'react'

const Reducercount = () => {
    const initialState={
        name:"",
        email:""
    }
   
    // const [state,dispatch]=useReducer((state,action)=>{
    //   switch(action.type){
    //     case"ADD":
    //     return state+action.payload
    //   }
    // },0)

    

    
    const [input,dispatch]=useReducer((state,action)=>{
      switch(action.type){
        case "NAME":
            return {...state,name:action.payload}
            case "EMAIL":
            return {...state,email:action.payload}
      }
         
    },initialState)

      const handleClick=(e)=>{
        e.preventDefault()
        console.log("submit")

      }
   console.log(input)

  return (
    <div>
        {/* <div>
        <h1>hii we are here</h1>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"ADD",payload:1})} >Add</button>
        </div> */}
        <div>
            <input type="text" value={input.name}  onChange={(e)=>dispatch({type:"NAME",payload:e.target.value})} />
            <input type="text" value={input.email}  onChange={(e)=>dispatch({type:"EMAIL",payload:e.target.value})} />
            <button onClick={handleClick}>Submit</button>
        </div>

    </div>
  )
}

export default Reducercount