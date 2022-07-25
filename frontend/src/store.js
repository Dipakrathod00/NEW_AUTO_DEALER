import {createStore , combineReducers , applyMiddleware} from "redux"

import {composeWithDevTools} from "redux-devtools-extension"

import thunk from "redux-thunk"
import { allAdminUserreducer, deleteregisterUserreducer, loginAllreducer, loginreducer, registerUserreducer } from "./reducer/auth-reducer"
import { deleteProductReducer, getProductReducer, getSingleProductReducer, postProductReducer, updateProductReducer , } from "./reducer/prodcut-reducer"


const rootReducer  = combineReducers({
       allProduct:getProductReducer,
       postProduct:postProductReducer,
       deleteproduct:deleteProductReducer,
       user:loginreducer,
       login:loginAllreducer,
       admin:allAdminUserreducer,
       single:getSingleProductReducer,
       registerUser:registerUserreducer,
       updateProduct:updateProductReducer,
       deleteuser:deleteregisterUserreducer
})
const userFromLocalStorage = localStorage.getItem("olxuser") ? JSON.parse(localStorage.getItem("olxuser"))
:undefined

const initial ={
       user:{
              userInfo:userFromLocalStorage
       }
}

const store = createStore( rootReducer , initial , composeWithDevTools(applyMiddleware(thunk)))

export default store

