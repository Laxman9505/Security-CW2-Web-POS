/** @format */

import nProgress from "nprogress";
import React from "react";
import Loadable from "react-loadable";
import { useNavigate } from "react-router-dom";

const Loading = () => null;

function Sidebar({ isSidebarOpen }) {
  const navigate = useNavigate();

  const OrdersLoadable = Loadable({
    loader: () => import("../../pages/Orders/Orders"),
    loading: Loading,
  });

  const InventoryLoadable = Loadable({
    loader: () => import("../../pages/Inventory/Inventory"),
    loading: Loading,
  });

  const PosLoadable = Loadable({
    loader: () => import("../../pages/Pos"),
    loading: Loading,
  });

  const linkToComponent = {
    "/orders/all": OrdersLoadable,
    "/pos": PosLoadable,
    "/inventory/list": InventoryLoadable,
  };

  function handleNavigation(pathname) {
    const ComponentToLoad = linkToComponent[pathname];
    if (ComponentToLoad) {
      nProgress.start();
      ComponentToLoad.preload().then(() => {
        nProgress.done();
        navigate(pathname);
      });
    }
  }

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "d-block" : "d-none"} d-lg-block`}
      id="sidebar"
    >
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" onClick={() => handleNavigation("/")}>
            <i className="fas fa-home"></i>
            <span className="menu-title">Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" onClick={() => handleNavigation("/pos")}>
            <i className="fas fa-cash-register"></i>
            <span className="menu-title">POS</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => handleNavigation("/orders/all")}
          >
            <i className="fas fa-cloud-meatball"></i>
            <span className="menu-title">Orders</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => handleNavigation("/inventory/list")}
          >
            <i className="fas fa-money-bill"></i>
            <span className="menu-title">Inventory</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
