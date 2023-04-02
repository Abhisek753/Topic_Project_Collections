import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",height:"60px",backgroundColor:"plum"}} >
        <Link to="/">
        <div >
            <p>Home</p>
        </div>
        </Link>
       <Link to="/reducer">
        <div >
            <p>UseReducer Counter</p>
        </div>
        </Link>
        <Link  to="/redux"  >
        <div >
            <p>Redux Counter</p>
        </div>
        </Link>
    </div>
  )
}

export default Navbar
const navbtn={backgroundColor:"red",width:"20%"}