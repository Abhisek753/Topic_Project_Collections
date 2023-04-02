import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Redux_counter from '../pages/Redux_counter'
import Reducercount from '../components/Reducercount'



const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/reducer" element={<Reducercount/>} />
            <Route path="/redux" element={<Redux_counter/>}/>
            <Route path="/" />
        </Routes>
    </div>
  )
}

export default Allroutes