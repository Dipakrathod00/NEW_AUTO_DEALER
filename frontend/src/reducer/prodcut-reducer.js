import {
    GET_PRODUCT_REQUEST,
GET_PRODUCT_SUCCESS,
GET_PRODUCT_FAIL,
DELETE_PRODUCT_REQUEST,
DELETE_PRODUCT_SUCCESS,
DELETE_PRODUCT_FAIL,
GET_SINGLE_PRODUCT_REQUEST,
GET_SINGLE_PRODUCT_SUCCESS,
GET_SINGLE_PRODUCT_FAIL,
POST_PRODUCT_REQUEST,
POST_PRODUCT_SUCCESS,
POST_PRODUCT_FAIL,
UPDATE_PRODUCT_REQUEST,
UPDATE_PRODUCT_SUCCESS,
UPDATE_PRODUCT_FAIL

} from "../constants/product-constant"
 export const getProductReducer =(state = {reduxProduct : []} , {type , payload}) =>{
    switch (type) {
        case  GET_PRODUCT_REQUEST:
            return {reduxProduct: [] , isLoading :true }
        case GET_PRODUCT_SUCCESS:
            return {reduxProduct: payload , isLoading :false }
        case GET_PRODUCT_FAIL:
            return {reduxProduct: payload , isLoading :false }
        default:
            return state  ; 
    }
}   

 export const postProductReducer =(state = {reduxProduct : {}} , {type , payload}) =>{
    switch (type) {
        case  POST_PRODUCT_REQUEST:
            return {reduxProduct: {} , isLoading :true }
        case POST_PRODUCT_SUCCESS:
            return {reduxProduct: payload , isLoading :false }
        case POST_PRODUCT_FAIL:
            return {reduxProduct: payload , isLoading :false }
        default:
            return state  ; 
    }
}   
 export const getSingleProductReducer =(state = {reduxSingleProduct : {}} , {type , payload}) =>{
    switch (type) {
        case  GET_SINGLE_PRODUCT_REQUEST:
            return {reduxSingleProduct: {} , isLoading :true }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {reduxSingleProduct: payload , isLoading :false }
        case GET_SINGLE_PRODUCT_FAIL:
            return {reduxSingleProduct: payload , isLoading :false }
        default:
            return state  ; 
    }
}   
 
 export const deleteProductReducer =(state = {deletereduxProduct : {}} , {type , payload}) =>{
    switch (type) {
        case  DELETE_PRODUCT_REQUEST:
            return {deletereduxProduct: {} , isLoading :true}
        case DELETE_PRODUCT_SUCCESS:
            return { isLoading :false }
        case DELETE_PRODUCT_FAIL:
            return {deletereduxProduct: payload , isLoading :false }
        default:
            return state ; 
    }
}   
 
 export const updateProductReducer =(state = {updatereduxProduct : {}} , {type , payload}) =>{
    switch (type) {
        case  UPDATE_PRODUCT_REQUEST:
            return {updatereduxProduct: {} , isLoading :true}
        case UPDATE_PRODUCT_SUCCESS:
            return { isLoading :false }
        case UPDATE_PRODUCT_FAIL:
            return {updatereduxProduct: payload , isLoading :false }
        default:
            return state ; 
    }
}   
 