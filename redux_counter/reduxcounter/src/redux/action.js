import { ADD, GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_ERROR, POST_TODOS_REQUEST, POST_TODOS_SUCCESS, REDUCE, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionTypes"

export const addAction=(payload)=>{
    return {type:ADD,payload}
}
export const reduceAction=(payload)=>{
    return {type:REDUCE,payload}
}
export const todoRequestAction=()=>{
    return {type:GET_TODOS_REQUEST}
}
export const todoSuccessAction=(payload)=>{
    return {type:GET_TODOS_SUCCESS,payload}
}
export const todoErrorAction=()=>{
    return {type:GET_TODOS_ERROR}
}
///post---
export const posttodoRequestAction=()=>{
    return {type:POST_TODOS_REQUEST}
}
export const posttodoSuccessAction=(payload)=>{
    return {type:POST_TODOS_SUCCESS,payload}
}
export const posttodoErrorAction=()=>{
    return {type:POST_TODOS_ERROR}
}
//delete ---

export const deletetodoRequestAction=()=>{
    return {type:POST_TODOS_REQUEST}
}
export const deletetodoSuccessAction=(payload)=>{
    return {type:POST_TODOS_SUCCESS,payload}
}
export const deletetodoErrorAction=()=>{
    return {type:POST_TODOS_ERROR}
}

//authentication
export const userLoginRequest=()=>{
    return {type:USER_LOGIN_REQUEST}
}
export const userLoginSuccess=(payload)=>{
    return {type:USER_LOGIN_SUCCESS,payload}
}
export const userLoginFailure=()=>{
    return {type:USER_LOGIN_FAILURE}
}