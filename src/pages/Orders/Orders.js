/** @format */

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllOrder from "./AllOrder/AllOrder";
import ViewOrder from "./ViewOrder";

const Orders = () => {
  const [viewOrderModal, setViewOrderModal] = useState(false);

  return (
    <div className="container-fluid page-body-wrapper1">
      <Modal
        size="xl"
        show={viewOrderModal}
        onHide={() => setViewOrderModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>View Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ViewOrder />
        </Modal.Body>
      </Modal>

      {/* </Spin> */}

      <div className=" main_panel_inner">
        <div className="content-wrapper">
          <div className="content">
            {/* main Breadcrumb Area */}
            <div className="row  ">
              <div className="col-md-8 grid-margin stretch-card">
                <div className="breadcrumb_top ">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-custom">
                      <Link to="/" className="breadcrumb-item fw-bold">
                        Home
                      </Link>
                      <li
                        className="breadcrumb-item active fw-bold"
                        aria-current="page"
                      >
                        <span>Order</span>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-md-4 text-end">
                <Link
                  to="/pos"
                  className="btn btn-success btn-sm bg-theme border-0"
                >
                  View Menu
                </Link>
              </div>
            </div>
            {/* order tabs */}
            <div className="menu_inner myorders">
              <div className="row">
                <div className="col-md-12 col-xxl-12">
                  <div className="menu_right">
                    <div className="right_top mb-4">
                      <div className="card mt-2">
                        <div className="card-body">
                          <div className="tab-content" id="v-pills-tabContent">
                            <AllOrder />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
