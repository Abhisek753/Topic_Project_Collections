import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div style={{display:"flex",backgroundColor:"teal",justifyContent:"space-evenly"}}>
           <Link to="/"><button>Home Page</button></Link>
           <Link to="/counter"><button>counter Page</button></Link>
          <Link to="/todoapp" > <button>Todo Page</button></Link>
        </div>
    </div>
  )
}

export default Navbar