import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { deletetodoErrorAction, deletetodoRequestAction, deletetodoSuccessAction, posttodoErrorAction, posttodoRequestAction, posttodoSuccessAction, todoErrorAction, todoRequestAction, todoSuccessAction } from '../redux/action'

const Redux_todo = () => {
const [title,setTitle]=useState("")
const dispatch=useDispatch()
let todos=useSelector((store)=>{
    // console.log(store)
   return store.todos
   })

const getTodo=()=>{
  dispatch(todoRequestAction())
    axios.get("http://localhost:8080/todos").then((res)=>{
        console.log(res.data)
        dispatch(todoSuccessAction(res.data))
    }).catch((err)=>{
    dispatch(todoErrorAction())
        
    })

}

const postTodo=(title)=>{
  dispatch(posttodoRequestAction())

    if(title){
      const newtodo={
          title:title,
          status:false,
          isError:false
        }
       return axios.post("http://localhost:8080/todos",newtodo).then((res)=>{
       dispatch(posttodoSuccessAction(res.data))
        // console.log(res)
          getTodo()
            console.log(res.data)
        }).catch((err)=>{
       dispatch(posttodoErrorAction())
        console.log(err)

        })
    }
  
}

useEffect(()=>{
    getTodo()

},[])

  const handleClick=()=>{
    
    console.log(title)
    postTodo(title).then((res)=>{
    
    })
    setTitle("")
   

  }
 let key=Math.random()+Date.now()

 const handleDelete=(id)=>{
     console.log(id,"delete")
     dispatch(deletetodoRequestAction())
      axios.delete(`http://localhost:8080/todos/${id}`).then((res)=>{
     dispatch(deletetodoSuccessAction(id))
     getTodo()
     console.log(id)
      
    }).catch((err)=>{
      console.log(err)
     dispatch(deletetodoErrorAction())

    })

 }
 const handleToggle=(id)=>{
      console.log("toggle",id) 
    //   console.log(id,"delete")
    //   dispatch(deletetodoRequestAction())
    //    axios.patch(`http://localhost:8080/todos/${id}`).then((res)=>{
    //   dispatch(deletetodoRequestAction(id))
    //   console.log(id)
       
    //  }).catch((err)=>{
    //    console.log(err)
    //  })   
        
 }


  return  <div>
    <h1>Redux Todo </h1>
    <input type="text" placeholder=' Todo Title' onChange={(e)=>setTitle(e.target.value)}/>
     <button onClick={handleClick}>Submit</button>
     {/* <button >Submit</button> */}

     <div>
        {todos.length>0&&todos.map((el)=>{
            return <div key={key+el.id} >{el.title}----{el.status?"true":"false"}
                <button onClick={()=>handleDelete(el.id)} >Delete</button>
                <button onClick={()=>handleToggle(el.id)} >Toggle</button>
            </div>
           
        })}
     </div>
    
    </div>
  
}

export default Redux_todo















