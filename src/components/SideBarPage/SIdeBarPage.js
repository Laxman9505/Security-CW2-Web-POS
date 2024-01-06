/** @format */

import nProgress from "nprogress";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SIdeBarPage({ pages, loading }) {
  const location = useLocation();
  const navigate = useNavigate();
  const path =
    location.pathname.split("/")[1] + "/" + location.pathname.split("/")[2];

  function handleNavigation(pathname, ComponentToLoad) {
    if (ComponentToLoad) {
      nProgress.start();
      ComponentToLoad.preload().then(() => {
        nProgress.done();
        navigate(pathname);
      });
    }
  }
  return (
    <div className="col-md-2 ">
      <div className="menu_left">
        <div className="card">
          <div className="card-body p-0">
            <div className="d-flex align-items-start innerpills">
              <div
                className="nav flex-column nav-pills w-100"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {pages?.map((page, i) => {
                  return (
                    <a
                      onClick={() =>
                        handleNavigation("/" + page.path, page.loadable)
                      }
                      key={i}
                      className={`nav-link ${
                        page.path == path ||
                        page?.pathInsideParentPath == path ||
                        page?.pathInsiderParentPath2 == path
                          ? "active"
                          : ""
                      }`}
                    >
                      {page.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SIdeBarPage);
