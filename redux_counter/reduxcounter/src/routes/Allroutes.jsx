import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Redux_counter from '../pages/Redux_counter'
import Reducercount from '../components/Reducercount'
import Redux_todo from '../pages/Redux_todo'
import Home from '../pages/Home'



const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/reducer" element={<Reducercount/>} />
            <Route path="/redux" element={<Redux_counter/>}/>
            <Route path="/reduxtodo" element={<Redux_todo/>}/>

            <Route path="/" element={<Home/>} />
        </Routes>
    </div>
  )
}

export default Allroutes