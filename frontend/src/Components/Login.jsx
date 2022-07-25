import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch , useSelector} from "react-redux" 
import {loginAction} from "../action/auth-action"
import {useNavigate} from "react-router-dom"


export default function Login() {
    const navigate  = useNavigate()
    const dispatch = useDispatch()
    const [email , setemail] = useState("dipak@gmail.com")
    const [password, setpassword] = useState("123")
    const {userInfo} = useSelector(state => state.user)
    const loginuser = (e)=>{
        e.preventDefault ()
        dispatch(loginAction({email, password}))
    }
    useEffect(() => {
      userInfo && navigate("/add-product")
    }, [userInfo])
    console.log(userInfo);
  return <div>
      <div className="container">
          <div className="col-sm-6 offset-3">
              
              <div className="card">
                  <div className="card-header">Log in user</div>
                  <div className="card-body">
                      <form action="" onSubmit={loginuser}>
                          <label htmlFor="email">email</label>
                      <input type="text" id='email' value={email} className='form-control' onChange={(e)=>setemail(e.target.value)} />    
                          <label htmlFor="password"> password</label>
                      <input type="text" id='password' value={password} className='form-control' onChange={(e)=>setpassword(e.target.value)} />
                      <br />
                      <button  className='btn btn-outline-success w-100'>Log in</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>;
}
