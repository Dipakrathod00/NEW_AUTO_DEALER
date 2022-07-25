import{
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_LOGOUT,   
    ADMIN_USER_REQUEST,
    ADMIN_USER_SUCCESS,
    ADMIN_USER_FAIL,
    REGISTER_USER_REQUEST,
REGISTER_USER_SUCCESS,
REGISTER_USER_FAIL
} from "../constants/auth-constatn"

import axios from "axios"

export const loginAction =(logincredential)=>async(dispatch , getstate)=> {
    try {
        dispatch({type:LOGIN_USER_REQUEST})
        const {data} = await axios.post("http://localhost:5000/api/v1/login", logincredential )
        dispatch ({type:LOGIN_USER_SUCCESS , payload:{info:data.data , token:data.token ,}})
        console.log(data.data);

        const y = getstate().user.userInfo
        localStorage.setItem("olxuser" , JSON.stringify(y))

    } catch (error) {
        dispatch ({type:LOGIN_USER_FAIL ,payload:error})
    }
}
export const loginAllUsersAction =()=>async(dispatch , getstate)=> {
    try {
        dispatch({type:ADMIN_USER_REQUEST})
        const {data} = await axios.get("http://localhost:5000/api/v1/adminlogin" )
        dispatch ({type:ADMIN_USER_SUCCESS , payload:data.data})
    } catch (error) {
        dispatch ({type:ADMIN_USER_FAIL ,payload:error})
    }
}

export const registerUsersAction =(registration)=>async(dispatch , getstate)=> {
    try {
        dispatch({type: REGISTER_USER_REQUEST})
        const {data} = await axios.post("http://localhost:5000/api/v1/user_register", registration )
        dispatch ({type:REGISTER_USER_SUCCESS , payload:data.data})
        console.log(data);
    } catch (error) {
        dispatch ({type: REGISTER_USER_FAIL ,payload:error})
    }
}
export const deleteregisterUsersAction =(id)=>async(dispatch , getstate)=> {
    try {
        dispatch({type: REGISTER_USER_REQUEST})
        const {data} = await axios.delete(`http://localhost:5000/api/v1/user_delete/${id}` )
        dispatch ({type:REGISTER_USER_SUCCESS , payload:data.data})
        dispatch(loginAllUsersAction())
        console.log(data);
    } catch (error) {
        dispatch ({type: REGISTER_USER_FAIL ,payload:error})
    }
}

export const logoutAction =()=> (dispatch)=>{
        dispatch ({type:LOGIN_LOGOUT})
        localStorage.removeItem("olxuser")
}




