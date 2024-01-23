/** @format */

import { Empty, Pagination } from "antd";
import React, { useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import LazyImage from "../LazyImage/LazyImage";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";

function POSMenu({}) {
  const dispatch = useDispatch();
  const { isLoading, allProducts, totalProducts } = useSelector(
    (state) => state.inventoryReducer
  );

  useEffect(() => {
    dispatch({
      type: "GET_ALL_PRODUCTS_REQUEST",
      payload: {
        Page: 1,
        PageSize: 10,
      },
    });
  }, []);
  function onShowSizeChange(current, pageSize) {
    window.scrollTo(0, 0);
    dispatch({
      type: "GET_ALL_PRODUCTS_REQUEST",
      payload: {
        Page: current,
        PageSize: pageSize,
      },
    });
  }
  return (
    <>
      <div className="col-md-8 col-xxl-9">
        <div className="menu_right">
          <div className="right_top mb-4">
            <div className="card">
              <div className="card-body">
                <div className="tab-content mt-3" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="horizontal_tabs menutabs">
                      <div className="tab-content mt-3" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="menu1"
                          role="tabpanel"
                          aria-labelledby="menu1-tab"
                        >
                          <div className="recentstores pt-50">
                            {isLoading ? (
                              <div className="row ">
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                              </div>
                            ) : (
                              <div className="row " style={{ padding: "10px" }}>
                                {allProducts?.length == 0 ? (
                                  <Empty />
                                ) : (
                                  allProducts?.map((product, i) => {
                                    return (
                                      <div
                                        className="col-lg-4 col-6 col-sm-4 col-xxl-3"
                                        key={i}
                                      >
                                        <div className="border-gray p-15 mb-4 bg-white text-center">
                                          <a
                                            href=""
                                            onClick={(e) => {
                                              e.preventDefault();
                                            }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                          >
                                            <LazyImage
                                              src={`http://localhost:8000/uploads/${product?.ItemImage}`}
                                              alt="product-img"
                                              placeholder={
                                                "https://via.placeholder.com/300x300.png?text=Loading..."
                                              }
                                            />
                                            <div className=" d-block">
                                              <h6 className="mb-0 fw-bold">
                                                {product.ItemName}
                                              </h6>{" "}
                                              <span className="d-block text-danger fw-bold">
                                                {"Rs "}
                                                {product.UnitPrice}
                                              </span>
                                            </div>
                                          </a>
                                          <a
                                            href=""
                                            onClick={(e) => {
                                              e.preventDefault();
                                              dispatch({
                                                type: "SET_ITEM_CART",
                                                payload: {
                                                  ...product,
                                                  Quantity: 1,
                                                },
                                              });

                                              // addToCartHandler(product);
                                            }}
                                            className="btn btn-raised shadow my-button w-xs  me-2 homecart homelogin"
                                          >
                                            {" "}
                                            Add
                                          </a>
                                        </div>
                                      </div>
                                    );
                                  })
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div />
                  <div>
                    {totalProducts > 0 && (
                      <Pagination
                        total={totalProducts}
                        showSizeChanger
                        onShowSizeChange={onShowSizeChange}
                        showTotal={(total) => (
                          <span className="fw-bold"> Total {total} items</span>
                        )}
                        defaultCurrent={1}
                        onChange={onShowSizeChange}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default POSMenu;
