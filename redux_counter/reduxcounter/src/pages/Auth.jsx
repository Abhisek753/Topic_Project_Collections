import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginFailure, userLoginRequest, userLoginSuccess } from '../redux/action'

const Auth = () => {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const dispatch=useDispatch()
    
    const token=useSelector((store)=>{
        return store.token
    })
    // console.log(token)

   const loginSubmit=()=>{
    let userData={
        email:email,
        password:pass
    }
       dispatch(userLoginRequest())
       axios.post("https://reqres.in/api/login",userData).then((res)=>{
       dispatch(userLoginSuccess(res.data.token))

        console.log(res)
       }).catch((err)=>{
       dispatch(userLoginFailure())

        console.log(err)
       })
   }

  return <div>
    <input type="email" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} />
    <input type="text" placeholder='enter your password' onChange={(e)=>setPass(e.target.value)} />
    <button onClick={loginSubmit}>submit</button>
  </div>
  
}

export default Auth