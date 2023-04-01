import React, { useState } from 'react'
import axios from "axios"
const Form = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [url,setUrl]=useState("")
    const [data,setData]=useState([])
    


    const handleSubmit=(e)=>{
        e.preventDefault()
    //   console.log("data")
    const obj={
        name,email,pass,url
    }
    
    setData([...data,obj])
    axios.post("https://mock-8-movie-json.vercel.app/users",obj)
    .then((res)=>{
        console.log(res)
    })
   
     
    
    }
    console.log(data)
  return <div>
    <div>
        <form action="" onSubmit={handleSubmit} >
            <input type="text" value={name} placeholder='enter yourname' required onChange={(e)=>setName(e.target.value)}/>
            <input type="email" value={email} placeholder='enter your email' required onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" value={pass} placeholder='enter your password' required onChange={(e)=>setPass(e.target.value)} />
            <input type="url" value={url} placeholder='enter image url' required onChange={(e)=>setUrl(e.target.value)} />
             <button>submit</button>
        </form>
       
        
         {data.length>0&&data.map((e)=>(
                <div>
                    <h1>my name is akash</h1>
                      <div>
                          <img src={e.url} alt="" />
                      </div>
                      <h2>{e.name}</h2>
                      <h2>{e.email}</h2>
                      <h2>{e.pass}</h2>
                      {/* https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg */}
                </div>
            ))}
         
    </div>
   </div>
}

export default Form