import React from 'react'
import { AuthContext } from './AuthContextProvider'
const Navbar = () => {
  const {isAuth,login,logout}=React.useContext(AuthContext)
  return (
    <div style={{display:"flex",width:"100%",backgroundColor:"teal",justifyContent:"space-evenly",alignItems:"center"}}>
        <button disabled={isAuth} onClick={login}>login</button>
        <button disabled={!isAuth} onClick={logout}>logout</button>
        <button>{isAuth?"Yes":"No"}</button>
    </div>
  )
}

export default Navbar