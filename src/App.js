/** @format */

import "antd/dist/antd.css";
import "nprogress/nprogress.css";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import "react-notifications/lib/notifications.css";
import "react-progress-bar-plus/lib/progress-bar.css";
import { Provider } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layout";
import "./Navbar.css";
import Store from "./Redux/store";
import "./index.css";

function App() {
  const PageNotFound = React.lazy(() =>
    import("./pages/PageNotFound/PageNotFound")
  );
  const Login = React.lazy(() => import("./pages/Login"));

  return (
    <Provider store={Store()}>
      {/* <NoInternetConnection> */}
      <div className="container-scroller">
        <Router>
          <React.Suspense fallback={null}>
            <Layout>
              <Routes>
                <Route path="*" element={<Navigate to="/404" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/404" element={<PageNotFound />} />
              </Routes>
            </Layout>
          </React.Suspense>
        </Router>
      </div>
      {/* </NoInternetConnection> */}
    </Provider>
  );
}

export default App;
