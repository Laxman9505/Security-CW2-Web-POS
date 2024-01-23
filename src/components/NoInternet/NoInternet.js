import React, { useState, useEffect } from "react";
import NoInternetSvg from "./NoInternetSvg";
const NoInternetConnection = (props) => {
  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true);

  // On initization set the isOnline state.
  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  // event listeners to update the state
  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });

  // if user is online, return the child component else return a custom component
  if (isOnline) {
    return props.children;
  } else {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center w-100 no-internet">
        <NoInternetSvg />
        <h1 style={{ fontSize: "24px" }}>
          No Internet Connection. Please check your connection.
        </h1>
      </div>
    );
  }
};

export default NoInternetConnection;
