import axios from "axios"
import { ALL_USER_FAIL, ALL_USER_REQUEST, ALL_USER_SUCCESS } from "../constants/auth-constatn"
import {
   
GET_PRODUCT_REQUEST,
GET_PRODUCT_SUCCESS,
GET_PRODUCT_FAIL,

POST_PRODUCT_REQUEST,
POST_PRODUCT_SUCCESS,
POST_PRODUCT_FAIL,

GET_SINGLE_PRODUCT_REQUEST,
GET_SINGLE_PRODUCT_SUCCESS,
GET_SINGLE_PRODUCT_FAIL,

DELETE_PRODUCT_REQUEST,
DELETE_PRODUCT_SUCCESS,
DELETE_PRODUCT_FAIL,

UPDATE_PRODUCT_REQUEST,
UPDATE_PRODUCT_SUCCESS,
UPDATE_PRODUCT_FAIL,
} from "../constants/product-constant"

export const allProductAction =()=>async(dispatch)=>{
   try {
       dispatch({type:GET_PRODUCT_REQUEST})
       const {data}= await axios.get("http://localhost:5000/api/v1/get")
       dispatch({type:GET_PRODUCT_SUCCESS , payload:data.data})
      
   } catch (error) {
       dispatch({type:GET_PRODUCT_FAIL , payload:error});
   }
}
export const postProductAction =(fd)=>async(dispatch)=>{
    console.log(fd);
   try {
       dispatch({type:POST_PRODUCT_REQUEST})
       const {data}= await axios.post("http://localhost:5000/api/v1/post" ,fd , {
        headers:{
            "Content-Type":"multipart/form-data"
        }
       })
       console.log(data);
       dispatch({type:POST_PRODUCT_SUCCESS , payload:data.data})
       dispatch(allProductAction())
      
   } catch (error) {
       dispatch({type:POST_PRODUCT_FAIL , payload:error});
   }
}
export const singleProductAction =(id)=>async(dispatch)=>{
   try {
       dispatch({type:GET_SINGLE_PRODUCT_REQUEST})
       const {data}= await axios.get(`http://localhost:5000/api/v1/find/single/${id}`)
       console.log(data);
       dispatch({type:GET_SINGLE_PRODUCT_SUCCESS , payload:data.data})
       
      
   } catch (error) {
       dispatch({type:GET_SINGLE_PRODUCT_FAIL , payload:error});
   }
}
export const deleteProductAction =(id)=>async(dispatch)=>{
   try {
       dispatch({type:DELETE_PRODUCT_REQUEST})
       const {data}= await axios.delete(`http://localhost:5000/api/v1/delete/${id}`)
       dispatch({type:DELETE_PRODUCT_SUCCESS })
       dispatch(allProductAction())
       console.log(data.data);
      
   } catch (error) {
       dispatch({type:DELETE_PRODUCT_FAIL , payload:error});
   }
}
export const updateProductAction =(id, updatedata)=>async(dispatch)=>{
   try {
       dispatch({type:UPDATE_PRODUCT_REQUEST})
       const {data}= await axios.put(`http://localhost:5000/api/v1/update/${id}`, updatedata)
       dispatch({type:UPDATE_PRODUCT_SUCCESS })
       dispatch(allProductAction())
       console.log(data.data);
      
   } catch (error) {
       dispatch({type:UPDATE_PRODUCT_FAIL , payload:error});
   }
}
export const loginDataAction =(id)=>async(dispatch)=>{
   try {
       dispatch({type:ALL_USER_REQUEST})
       const {data}= await axios.get(`http://localhost:5000/api/v1/find/${id}`)
       console.log(data.data);
       dispatch({type:ALL_USER_SUCCESS,payload:data.data})
       dispatch(allProductAction())
      
   } catch (error) {
       dispatch({type:ALL_USER_FAIL , payload:error});
   }
}