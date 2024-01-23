/** @format */

import { LogoutOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import nProgress from "nprogress";
import React, { useEffect, useState } from "react";
import Loadable from "react-loadable";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  const OrdersLoadable = Loadable({
    loader: () => import("../../pages/Orders/Orders"),
    loading: () => null,
  });
  const Dashboard = Loadable({
    loader: () => import("../../pages/Home"),
    loading: () => null,
  });
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.authenticationReducer);

  const linkToComponent = {
    "/": Dashboard,
    "/orders/all": OrdersLoadable,
  };

  function handleNavigation(pathname, state = {}) {
    const ComponentToLoad = linkToComponent[pathname];
    if (ComponentToLoad) {
      nProgress.start();
      ComponentToLoad.preload().then(() => {
        nProgress.done();
        navigate(pathname, { state: state });
      });
    }
  }
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [window.location.pathname]);

  return (
    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <Drawer
        width={240}
        style={{ paddingBottom: "4rem" }}
        footerStyle={{ paddingBottom: "4rem" }}
        closeIcon={<></>}
        headerStyle={{ background: "#00205A", color: "white" }}
        title={
          <a
            className="navbar-brand brand-logo"
            onClick={() => handleNavigation("/")}
          >
            <img
              style={{ width: "60%" }}
              src={"/assets/images/splash.png"}
              alt="logo"
            />
          </a>
        }
        closable={true}
        placement={"left"}
        onClose={() => {
          setIsSidebarOpen(false);
        }}
        open={isSidebarOpen}
        key={"left"}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </Drawer>

      <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
        <a
          className="navbar-brand brand-logo"
          onClick={() => handleNavigation("/")}
        >
          <img src={"/assets/images/splash.png"} alt="logo" />
        </a>
      </div>

      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        {
          <Button
            onClick={() => {
              setIsSidebarOpen(true);
            }}
            style={{ background: "#E1045F", color: "white", border: "#E1045F" }}
            shape="circle"
            icon={<MenuUnfoldOutlined />}
            size={"large"}
          />
        }

        <div className="d-flex gap-4">
          <div>
            <img
              className="img-xs rounded-circle"
              src={
                userDetails?.image
                  ? `http://localhost:8000/uploads/${userDetails?.image}`
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt="Profile image"
            />
            <span className="ms-2" style={{ fontSize: "13px" }}>
              {userDetails?.name}
            </span>
          </div>
          <div
            className="f-flex align-items-center"
            onClick={() => {
              dispatch({
                type: "LOGOUT",
              });
            }}
            style={{ cursor: "pointer" }}
          >
            <LogoutOutlined style={{ color: "Red", marginBottom: "4px" }} />
            <span className="ms-2" style={{ fontSize: "13px", color: "red" }}>
              Logout
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
