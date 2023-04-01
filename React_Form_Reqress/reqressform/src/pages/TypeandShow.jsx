import React, { useState } from 'react'

const TypeandShow = () => {
    const [value,setValue]=useState("")
  return (
    <div>
        <div>
          <div>
             <h1>welcome to typing</h1>
         </div>
         <div>
            <input type="text" value={value} style={{width:"400px",height:"200px",fontSize:"40px",justifyContent:"fitContent"}}onChange={(e)=>setValue(e.target.value)}/>
         </div>
         <div>
            <h2>
              {value}
            </h2>
         </div>
        </div>
    </div>
  )
}

export default TypeandShow