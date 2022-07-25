import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../action/auth-action";


export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div>
      <div className="container" style={{ padding: "40px" }}>
        <div className="navbar navbar-default bg-info fixed-top ">
          <div className="d-flex align-items-center">
          <i className="bi bi-check2-all ms-5  "></i>
            <h4>CarShoW</h4>
            <Link to="/">
              <button className="btn btn-outline-light btn-sm ms-5 text-dark shadow">
                Home
              </button>
            </Link>
          </div>

          <div className="">
            {userInfo ? (
              <div className="row d-flex  justify-content-end ">
                <div className="col-sm d-flex gap-3 me-3 ">
                  <Link to="/add-product">
                    {" "}
                    <button className="btn btn-danger btn-sm shadow-lg">
                      My Record
                    </button>
                  </Link>
                  <Link to="/profile" className="btn btn-success btn-sm shadow ">
                    {userInfo.info.name}
                  </Link>
                  <Link to="/logout">
                    {" "}
                    <button
                      className="btn btn-dark btn-sm shadow-lg "
                      onClick={(e) =>{                         
                        dispatch(logoutAction())
                       setTimeout(() => {
                        navigate("/")
                        console.log("you logged out ");
                       }, 3000);
                      }}
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="d-flex gap-3 me-5 ">
                <Link to="/register">
                  {" "}
                  <button className="btn btn-outline-light btn-sm shadow">
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  {" "}
                  <button className="btn btn-outline-warning btn-sm shadow">
                    login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>




    </div>
    // </div>
  );
}
