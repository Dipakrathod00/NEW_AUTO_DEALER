
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  allProductAction,
  loginDataAction,
  singleProductAction,
  deleteProductAction,
  postProductAction,
  updateProductAction,
} from "../action/product-action";
import { deleteregisterUsersAction, loginAllUsersAction } from "../action/auth-action";

export default function User() {
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");
  const [userId, setuserId] = useState("");
  // const [result, setresult] = useState("");
  // const [toggle, settoggle] = useState("");
  const [editId, seteditId] = useState(false);
  const [updatename, setupdatename] = useState("");
  const [updatedesc, setupdatedesc] = useState("");
  const [updateprice, setupdateprice] = useState("");
  const [updateimage, setupdateimage] = useState("");
  const [userDeleteId, setuserDeleteId] = useState("")
  const dispatch = useDispatch();
  let deleteId;
  console.log(userDeleteId);
 
   
  const { reduxProduct, isLoading } = useSelector((state) => state.allProduct);
  const { reduxSingleProduct } = useSelector((state) => state.single);
  const { userData } = useSelector((state) => state.deleteuser);
  console.log(reduxSingleProduct);
  console.log(reduxProduct);

  const { userInfo } = useSelector((state) => state.user);
  //    console.log(userInfo);
  const { loginAllData } = useSelector((state) => state.login);
  //  console.log(loginAllData);
  const { adminData } = useSelector((state) => state.admin);
  // const { userData } = useSelector((state) => state.registerUser);
     console.log(userData);
  const addproduct = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", name);
    fd.append("price", price);
    fd.append("desc", desc);
    fd.append("image", image);
    fd.append("userId", userId);
    dispatch(postProductAction(fd));
    // dispatch(allProductAction())
  };

  const handleupdateData = async (e) => {
    e.preventDefault();
    await dispatch(
      updateProductAction(editId, {
        name: updatename,
        desc: updatedesc,
        price: updateprice,
      })
    );
  };
  const handleupdate = (id) => {
    seteditId(id);
    const result = loginAllData.filter((item) => item._id == id);
    console.log(result);
    setupdatename(result[0].name);
    setupdatedesc(result[0].desc);
    setupdateprice(result[0].price);
  };

  useEffect(() => {
    if (userInfo) {
      dispatch(loginDataAction(userInfo.info._id));
     
    }
    if (userInfo.info.isAdmin === true) {
      dispatch(loginAllUsersAction());
      
    }
    dispatch(allProductAction());
  
  }, []);


  const inputf = (e) => {
    setimage(e.target.files[0]);
  };


  const handleupdateimage = (e) => {
    setupdateimage(e.target.files[0]);
  };


  const userdeletesingledata  = ()=>{
    dispatch(deleteregisterUsersAction(userDeleteId))

  }

  const setresult = ()=>{
    dispatch(deleteProductAction(deleteId));
    dispatch(allProductAction())
                  toast.success("PRODUCT DELETED SUCCESSFULLY", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                  });
  }
  

  return (
    <div>
   
      <ToastContainer />
      <div className="container ">
        <div className="alert alert-info d-flex justify-content-center">
          {userInfo.info.isAdmin == false ? (
            <div>
              <Link to="/add-product">
                {" "}
                <button
                  className="btn btn-warning btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#uplaodProduct"
                >
                  Upload Product
                </button>
              </Link>
            </div>
          ) : (
            <div className="d-flex">
              <h3>Admin</h3>
            </div>
          )}
        </div>
        <div
          className="modal fade"
          id="uplaodProduct"
          data-backdrop="static"
          data-keyboard="false"
          tabindex="-1"
          aria-labelledby="uplaodProduct"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  upload product
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">Enter product detail</div>
                    <div className="card-body">
                      <form action="" onSubmit={addproduct}>
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                        <label htmlFor="desc">desc</label>
                        <input
                          type="text"
                          id="desc"
                          className="form-control"
                          onChange={(e) => {
                            setdesc(e.target.value);
                          }}
                        />
                        <label htmlFor="price">price</label>
                        <input
                          type="text"
                          id="price"
                          className="form-control"
                          onChange={(e) => {
                            setprice(e.target.value);
                          }}
                        />

                        <input
                          type="file"
                          id="image"
                          className="form-control"
                          onChange={inputf}
                        />
                        <br />
                        <div className="d-flex justify-content-between">
                          <button
                          type="submit"
                            data-bs-dismiss="modal"
                            className="btn btn-warning"
                            onClick={() => setuserId(userInfo.info._id)}
                          >
                            Add product
                          </button>
                          <button
                            data-bs-dismiss="modal"
                            className="btn btn-danger"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isLoading ? (
          <div className="spinner spinner-border"></div>
        ) : 
        userInfo.info.isAdmin === true ? (
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                {adminData.map((user, i) => (
                  <div className="col-sm-12">
                    <div className="alert alert-info shadow p-3 mb-5 rounded">
                      <h6>User {i + 1}</h6> <hr />
                      <p>
                        Name : <strong>{user.name}</strong>{" "}
                      </p>
                      <p>
                        Email : <strong>{user.email}</strong>{" "}
                      </p>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <button onClick={e=>setuserDeleteId(user._id)} className="btn btn-outline-danger btn-sm w-100" data-bs-target="#userdelete" data-bs-toggle="modal">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-sm-8">
                <div className="row">
                  {reduxProduct.map((user, index) => (
                    <div className="col-sm-4">
                      <div className="alert alert-primary shadow p-3 mb-5 rounded">
                        <div className="d-flex justify-content-between">
                          <h6>Product {index + 1}</h6>
                        </div>
                        <hr />
                        <img style={{height:"9rem" , width:"15rem"}}
                          className="img-fluid pb-2"
                          src={"http://localhost:5000/" + user.image}
                          alt=""
                        />
                        <p>
                          Heading : <strong>{user.name}</strong>{" "}
                        </p>
                        <p>
                          Desc : <strong>{user.desc}</strong>{" "}
                        </p>
                        <p>
                          Price : <strong>{user.price}</strong>{" "}
                        </p>
                        <hr />
                       
                          <button
                            className="btn btn-outline-danger btn-sm w-100"
                            data-bs-target="#deletesingleproduct"
                            data-bs-toggle="modal"
                            onClick={(e) => {
                              deleteId = user._id;
                              console.log(user._id);
                            }}
                          >
                            Delete
                          </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : loginAllData.length > 0 ? (
          <div className="container">
            <div className="row">
              {loginAllData.map((item, i) => (
                <div className="col-sm-4">
                  <div className="alert alert-secondary  ">
                    <div className="d-flex justify-content-between">
                      <h6>Product {i + 1}</h6>
                    </div>{" "}
                    <hr />
                    <img style={{height:"9rem" , width:"15rem"}}
                      className="img-fluid pb-2"
                      src={"http://localhost:5000/" + item.image}
                      alt=""
                    />
                    <h5>Name : {item.name}</h5>
                    <h5>Price: {item.price}</h5>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-outline-warning btn-sm text-black"
                        data-bs-target="#editmodal"
                        data-bs-toggle="modal"
                        onClick={(e) => handleupdate(item._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        data-bs-target="#deletesingleproduct"
                        data-bs-toggle="modal"
                        onClick={(e) => {
                          deleteId = item._id;
                          console.log(deleteId);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="alert alert-danger">
              {" "}
              <h3 className="offset-5">No Data Found</h3>
            </div>
          </div>
        )}
        ;
      </div>

      <div
        className="modal fade"
        id="singleproduct"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="singleproduct"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Product Detail
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="alert alert-secondary">
                <h4>{reduxSingleProduct.name}</h4>
                <hr />
                <h4>desc:{" " + reduxSingleProduct.desc}</h4>
                <h4>price:{" " + reduxSingleProduct.price}</h4>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="deletesingleproduct"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="deletesingleproduct"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Delete Product
              </h5>

              <span
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                aria-hidden="true"
              >
                <i class="bi bi-x-circle-fill"></i>
              </span>
            </div>
            <div className="modal-body">
              <h4>Are You sure ?</h4>
            </div>
            <div className="modal-footer">
              <button
                data-bs-dismiss="modal"
                className="btn btn-outline-danger btn-sm"
                onClick={setresult}
              >
                Yes
              </button>
              <button
                data-bs-dismiss="modal"
                className="btn btn-outline-warning btn-sm "
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* edit */}

      <div
        class="modal fade"
        id="editmodal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editmodal">
                Update Data
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="" onSubmit={handleupdateData}>
              <div class="modal-body">
                <div className="input-group w-100">
                  <div className="input-group-text">Name</div>
                  <input
                  value={updatename}
                    name="name"
                    onChange={(e) => setupdatename(e.target.value)}
                    className="form-control "
                    type="text"
                  />
                </div>
                <br />
                <div className="input-group">
                  <div className="input-group-text">Desc</div>
                  <input
                  value={updatedesc}
                    onChange={(e) => setupdatedesc(e.target.value)}
                    className="form-control"
                    type="text"
                  />
                </div>
                <br />

                <div className="input-group">
                  <div className="input-group-text">Price</div>
                  <input
                  value={updateprice}
                    onChange={(e) => setupdateprice(e.target.value)}
                    className="form-control"
                    type="text" 
                  />
                </div>
                <img src={updateimage} alt="" />
                <input className="form-control" type="file" onChange={handleupdateimage} />
              </div>
              <div class="modal-footer btn-group-sm" role="group">
                <button class="btn btn-warning" data-bs-dismiss="modal">
                  Close
                </button>
                <button class="btn btn-success" data-bs-dismiss="modal">update</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      
      <div class="modal fade" id="userdelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="userdelete">Delete Window</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you Sure.....?
            </div>
            <div class="modal-footer">
              <button type="button" className="btn btn-danger"data-bs-dismiss="modal" onClick={userdeletesingledata}>Yes</button>
              <button type="button" className="btn btn-success">No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
