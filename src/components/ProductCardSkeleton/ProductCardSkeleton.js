/** @format */

import React from "react";
import Skeleton from "react-loading-skeleton";
function ProductCardSkeleton() {
  return (
    <div className="col-lg-3 col-6 col-sm-4 col-xxl-2">
      <div className="border-gray p-15 mb-4 bg-white text-center">
        <a>
          <Skeleton height={100} />
          <div className=" d-block">
            <Skeleton />
          </div>
        </a>
        <div>
          <Skeleton count={0.2} height={20} inline />
          <Skeleton count={0.2} height={20} style={{ marginLeft: "10px" }} />
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
