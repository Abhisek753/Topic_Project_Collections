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

    const namesubmit=(e)=>{
      dispatch({type:"NAME",payload:e.target.value})
    }
    const emailsubmit=(e)=>{
      dispatch({type:"EMAIL",payload:e.target.value})
    }

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
            <input type="text" required value={input.name}  onChange={namesubmit} />
            <input type="email" required value={input.email}  onChange={emailsubmit} />
            <button onClick={handleClick}>Submit</button>
        </div>
        <div>
          <h1>{input.name}</h1>
          <h1>{input.email}</h1>
        </div>

    </div>
  )
}

export default Reducercount