import React from 'react'
import {Routes,Route} from "react-router-dom"

import HomePage from '../Components/HomePage';
import Todo from '../Components/Todo';
import TodoApp from '../Components/TodoApp/TodoApp';

const Allroutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/counter" element={<Todo/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/todoapp" element={<TodoApp/>}/>
        
    </Routes>
    </div>
  )
}

export default Allroutes