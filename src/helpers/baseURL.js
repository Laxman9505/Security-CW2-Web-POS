/** @format */

import axios from "axios";
export const API = axios.create({
  baseURL: "http://localhost:8000",
});

API.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    config.headers = Object.assign(
      {
        Authorization: `Bearer ${token}`,
      },
      config.headers
    );
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
