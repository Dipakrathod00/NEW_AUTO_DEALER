import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const {userInfo} = useSelector(state=>state.user)
    console.log(userInfo.info);
  return (
   <div className="container">
   <div className="row">
    <div className="col-sm-6 offset-sm-3">
  
        <div className="card">
            <div className="card-body">
            <h3>Name : {userInfo.info.name}</h3>
            <h3>Email : {userInfo.info.email}</h3>
            </div>
        </div>
   
    </div>
   </div>
   </div>
  )
}
