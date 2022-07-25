import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate()
  // setTimeout(navigate("/") , 3000 );
  return (
    <div>
        <div className="container ">
            <div className="alert alert-success">
                <h1 className='offset-3'>You Have Loged out succesfully</h1>
               
            </div>
            {/* <div className="alert alert-info">
            <h1 className='offset-3'>please Wait.... you will re-directed on Home page</h1>               
            </div> */}
        </div>
    </div>
  )
}
