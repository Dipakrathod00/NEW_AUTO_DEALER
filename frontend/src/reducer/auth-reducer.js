import { ADMIN_USER_FAIL, ADMIN_USER_REQUEST, ADMIN_USER_SUCCESS, ALL_USER_FAIL, ALL_USER_REQUEST, ALL_USER_SUCCESS, DELETE_REGISTER_USER_FAIL, DELETE_REGISTER_USER_REQUEST, DELETE_REGISTER_USER_SUCCESS, LOGIN_LOGOUT } from "../constants/auth-constatn"
import {
    LOGIN_USER_REQUEST,
LOGIN_USER_SUCCESS,
LOGIN_USER_FAIL
} from "../constants/auth-constatn"

export const loginreducer = (state = {} , {type , payload})=>{
   switch (type){
       case LOGIN_USER_REQUEST: return {isLoading : true}
       case LOGIN_USER_SUCCESS: return {isLoading:false , userInfo:payload}
       case LOGIN_USER_FAIL: return {isLoading:false , userInfoerror : payload}
       case LOGIN_LOGOUT: return {}
       default: 
       return state ;
   }
}

export const loginAllreducer = (state = {loginAllData:[]} , {type , payload})=>{
   switch (type){
       case ALL_USER_REQUEST: return {loginAllData:[],isLoading : true}
       case ALL_USER_SUCCESS: return {isLoading:false , loginAllData:payload}
       case ALL_USER_FAIL: return {isLoading:false , loginAllDataError :payload}

       default: 
       return state ;
   }
}
export const allAdminUserreducer = (state = {adminData:[]} , {type , payload})=>{
   switch (type){
       case ADMIN_USER_REQUEST: return {adminData:[],isLoading : true}
       case ADMIN_USER_SUCCESS: return {isLoading:false , adminData:payload}
       case ADMIN_USER_FAIL: return {isLoading:false , adminDataError :payload}

       default: 
       return state ;
   }
}

export const registerUserreducer = (state = {userData:[]} , {type , payload})=>{
   switch (type){
       case ADMIN_USER_REQUEST: return {adminData:[],isLoading : true}
       case ADMIN_USER_SUCCESS: return {isLoading:false , userData:payload}
       case ADMIN_USER_FAIL: return {isLoading:false , userDataError :payload}

       default: 
       return state ;
   }
}

export const deleteregisterUserreducer = (state = {userData:{}} , {type , payload})=>{
   switch (type){
       case DELETE_REGISTER_USER_REQUEST: return {adminData:[],isLoading : true}
       case DELETE_REGISTER_USER_SUCCESS: return {isLoading:false , userData:payload}
       case DELETE_REGISTER_USER_FAIL: return {isLoading:false , userDataError :payload}

       default: 
       return state ;
   }
}

