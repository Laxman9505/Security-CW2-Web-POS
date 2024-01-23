/** @format */

import React from "react";
import Loadable from "react-loadable";
import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import SIdeBarPage from "../../components/SideBarPage/SIdeBarPage";

function Inventory() {
  const ProductList = Loadable({
    loader: () => import("./ProductList"),
    loading: () => null,
  });

  const AddProduct = Loadable({
    loader: () => import("./AddProduct"),
    loading: () => null,
  });

  return (
    <div className="container-fluid page-body-wrapper1">
      {/* partial:partials/_sidebar.html */}
      {/* Sidebar */}
      {/* End sidebar */}
      {/* partial */}
      <div className=" main_panel_inner">
        <div className="content-wrapper">
          <div className="content">
            {/* main Breadcrumb Area */}
            <div className="row  d-flex justify-content-center">
              <div className="col-md-12 grid-margin stretch-card">
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
                        <span>Inventory</span>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* order tabs */}
            <div className="menu_inner myvendors">
              <div className="row">
                <SIdeBarPage
                  pages={[
                    {
                      name: "Product List",
                      path: "inventory/list",
                      loadable: ProductList,
                    },
                    {
                      name: "Add Product",
                      path: "inventory/add-product",
                      loadable: AddProduct,
                    },
                  ]}
                />

                {/* end menu left */}
                {/* start menu right */}
                <div className="col-md-10 col-xxl-10">
                  <Outlet />
                  <React.Suspense fallback={null}>
                    <Routes>
                      <Route path="/list" element={<ProductList />} />
                      <Route
                        path="/add-product"
                        element={<AddProduct isEdit={false} />}
                      />
                      <Route
                        path="/*"
                        element={<Navigate to="/404" replace />}
                      />
                    </Routes>
                  </React.Suspense>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer ">
            <div className="container-fluid clearfix ">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block "></span>
            </div>
          </footer>
          {/* partial */}
        </div>
        {/* main-panel ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>
  );
}

export default Inventory;
