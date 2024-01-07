/** @format */

import React from "react";
import Skeleton from "react-loading-skeleton";

const HomeSkeleton = () => {
  return (
    <>
      <div className="row col-md-12 col-xxl-12">
        <div className="col-md-12">
          <div className="card height-100">
            <div className="card-header border-0 align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">Today's Sales</h4>
            </div>
            {/* end card header */}
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <Skeleton width={"100%"} height={150} borderRadius={10} />

                  {/* end card body */}

                  {/* end card*/}
                </div>
                {/* end col*/}
                <div className="col-md-6">
                  <Skeleton width={"100%"} height={150} borderRadius={10} />

                  {/* end card*/}
                </div>
                {/* end col*/}
                <div className="col-md-6">
                  <Skeleton width={"100%"} height={150} borderRadius={10} />

                  {/* end card*/}
                </div>
                {/* end col*/}
                <div className="col-md-6">
                  <Skeleton width={"100%"} height={150} borderRadius={10} />

                  {/* end card*/}
                </div>
                {/* end col*/}
              </div>
            </div>
          </div>
          {/* end card */}
        </div>
      </div>
    </>
  );
};

export default HomeSkeleton;
