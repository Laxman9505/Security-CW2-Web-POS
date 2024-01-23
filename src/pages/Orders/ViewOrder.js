/** @format */

import React from "react";
function ViewOrder({ order }) {
  return (
    <div className="vieworder_inner bg-light" style={{ padding: "15px" }}>
      <div className="row">
        <div className="col-md-12">
          <div className="innersec border-bottom border-dashed border-0 ">
            <h6 className="text-theme fw-bold">Product With Price Details</h6>
            {order?.ProductList?.map((product, i) => {
              return (
                <div className="row bg-light" key={"product" + i}>
                  <div className="col-md-3">
                    <img
                      src={`http://localhost:8000/uploads/${product?.ProductImage}`}
                      alt=""
                      className="img-fluid orderimg"
                    />
                  </div>
                  <div className="col-md-3">
                    <p className="fw-bold mb-0">Name</p>
                    <span>
                      <small>{product.ProductName}</small>
                    </span>
                  </div>
                  <div className="col-md-2">
                    <p className="fw-bold mb-0">Quantity</p>
                    <span>
                      <small>{product.ProductQuantity}</small>
                    </span>
                  </div>
                  <div className="col-md-2">
                    <p className="fw-bold mb-0">Total</p>
                    <span>
                      <small>{product.ProductPrice}</small>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewOrder;
