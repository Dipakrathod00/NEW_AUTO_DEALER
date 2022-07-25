import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { registerUsersAction } from '../action/auth-action'
import {useNavigate} from "react-router-dom"

export default function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

   const handleregister =(e)=>{
        e.preventDefault ()
        dispatch(registerUsersAction({name, email , password}))
        navigate("/login")

    }

  return (
    <>
        <div className="container">
              <div className="row">
                <div className="col-sm-6 offset-sm-3">
                  <div className="card">
                    <div className="card-header">Signup</div>
                    <div className="card-body">
                        <form action="" onSubmit={handleregister}>
                      <div>
                        <label htmlFor="name" className="form-label">First name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          onChange={e=>setname(e.target.value)}
                          placeholder="Enter your name"
                          
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a username.</div>
                      </div>
                      <div className="mt-2">
                        <label htmlFor="email" className="form-label">First Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          onChange={e=>setemail(e.target.value)}
                          placeholder="Enter Your Email"
                          
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a username.</div>
                      </div>
                      <div className="mt-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                          type="text"
                          className="form-control"
                          id="password"
                          onChange={e=>setpassword(e.target.value)}
                          placeholder="Enter Your Password"
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a password.</div>
                      </div>
                      
                      <button  className="btn btn-primary w-100 mt-3">
                        Signup
                      </button>
                      <p className="text-center mt-3">
                        Already Have Account? <a href="#">Login</a>
                      </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
