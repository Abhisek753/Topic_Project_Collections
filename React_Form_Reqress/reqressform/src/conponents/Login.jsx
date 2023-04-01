import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const [lemail,setlEmail]=useState("")
    const [lpass,setlPass]=useState("")
    
    const loginSubmit=async(e)=>{
      e.preventDefault()
    //  let res=await axios.get("https://mock-8-movie-json.vercel.app/users")
    //   let data= res.data;
    //   console.log(data)
    //   let user = data.filter((el) => {
    //     return el.email === lemail && el.pass === lpass;
    //   });
    //   if (user.length > 0) {
     
    //     alert("successful");
    //     window.location.href = "./index.html";
    //   } else {
    //     alert("Login Failed");
    //   }
    let obj={
      email:lemail,
      password:lpass
    }
      
    let res =await axios.post("https://reqres.in/api/login",obj)
    console.log(res.data)
   if(res.data.token){
    alert("loin success")
   }
    
    
    }
    
    // console.log(lemail)
    // console.log(lpass)

   


  return <div>
    <form action="" onSubmit={loginSubmit}>
            <input type="text" value={lemail} placeholder='enter your email'  onChange={(e)=>setlEmail(e.target.value)}/>
            <input type="text" value={lpass} placeholder='enter your password' onChange={(e)=>setlPass(e.target.value)} />
            <button>submit</button>
    </form>
  </div>
    
  
}

export default Login