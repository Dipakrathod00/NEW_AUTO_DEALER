
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProductAction } from "../action/product-action";


export default function Home() {
  const dispatch = useDispatch();
  const { reduxProduct, isLoading } = useSelector((state) => state.allProduct);
  console.log(reduxProduct);

  useEffect(() => {
    dispatch(allProductAction());
  }, []);
  return (
    <div>
      <div className="container">
        <div className="alert alert-info"></div>
      </div>

      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner spinner-border"></div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {reduxProduct.map((item) => (
              <div className="col-sm-4">
                <div className="alert alert-info  ">
                  <img
                    style={{ height: "9rem", width: "15rem" }}
                    className="img-fluid pb-2"
                    src={"http://localhost:5000/" + item.image}
                    alt=""
                  />
                  <h4>Name :{item.name} </h4>
                  <h4>Desc : {item.desc}</h4>
                  <h4>Price:{item.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
