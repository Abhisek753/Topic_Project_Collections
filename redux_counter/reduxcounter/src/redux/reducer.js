import { ADD, DELETE_TODOS_ERROR, DELETE_TODOS_REQUEST, DELETE_TODOS_SUCCESS, GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_ERROR, POST_TODOS_REQUEST, POST_TODOS_SUCCESS, REDUCE, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionTypes";

export const reducer=(state,{type,payload})=>{
    
switch(type){
        case ADD:
            return {...state,count:state.count+payload}
        case REDUCE:
          return {...state,count:state.count-payload}
        case GET_TODOS_REQUEST:
            return {...state,isLoading:true}
        case GET_TODOS_SUCCESS:
                return {...state,isLoading:false,todos:payload}
        case GET_TODOS_ERROR:
                return {...state,isLoading:false,isError:true}
        case POST_TODOS_REQUEST:
                return {...state,isLoading:true}
        case POST_TODOS_SUCCESS:
            console.log(payload)
                 return {...state,isLoading:false,todos:payload}
        case POST_TODOS_ERROR:
                return {...state,isLoading:false,isError:true}
         case DELETE_TODOS_REQUEST:
                 return {...state,isLoading:true}
          case DELETE_TODOS_SUCCESS:
                return {...state,isLoading:false,todos:payload}
         case DELETE_TODOS_ERROR:
                        return {...state,isLoading:false,isError:true}
        case USER_LOGIN_REQUEST:
                return {...state,isAuth:false}
         case USER_LOGIN_SUCCESS:
                        return {...state,isAuth:true,token:payload}
        case USER_LOGIN_FAILURE:
                console.log(payload)
                                return {...state,isAuth:false}
        default:
            return state;
    }

}