/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { API } from "../helpers/baseURL";
import { getLocalStorage } from "../helpers/frontendHelper";

function Layout({ children }) {
  const location = useLocation();
  API.interceptors.request.use(
    async (config) => {
      const token = getLocalStorage("token");

      const userId = getLocalStorage("userDetails")?.userId;

      config.headers = Object.assign(
        {
          Authorization: `Bearer ${token}`,
          userId,
        },
        config.headers
      );
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  const path = location.pathname.split("/")[1];
  return (
    <>
      {path == "404" || path == "login" || path == "register" ? "" : <Navbar />}
      {children}
    </>
  );
}

export default Layout;
