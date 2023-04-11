 import {legacy_createStore} from "redux"
import { reducer } from "./reducer"
  const initialState={
    count:0,
    todos:[],
    isLoading:false,
    isAuth:false,
    token:"",
    isError:false
}
  export const store=legacy_createStore(reducer,initialState)