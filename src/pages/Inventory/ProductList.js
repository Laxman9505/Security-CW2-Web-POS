/** @format */

import { Form, Pagination, Popconfirm, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TableSkeleton from "../../components/Table Skeleton/TableSkeleton";

function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const category = Form.useWatch("productCategoryId", form);
  const searchKeyword = Form.useWatch("searchKeyword", form);
  const status = Form.useWatch("statusId", form);
  const { allImages, isLoading, allProducts, totalProducts } = useSelector(
    (state) => state.inventoryReducer
  );
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    // Fetch CSRF token from the server
    fetch("http://localhost:8000/api/csrf-token")
      .then((response) => response.json())
      .then((data) => setCsrfToken(data.csrfToken))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    if (searchKeyword) {
      const searchTimeout = setTimeout(async () => {
        if (searchKeyword) {
          dispatch({
            type: "GET_ALL_PRODUCTS_REQUEST",
            payload: {
              Page: 1,
              PageSize: 10,
              ExternalFilter: {
                SearchKeywords: searchKeyword,
                category: category,
              },
            },
          });
        }
      }, 500);
      return () => {
        clearTimeout(searchTimeout);
      };
    } else {
      dispatch({
        type: "GET_ALL_PRODUCTS_REQUEST",
        payload: {
          Page: 1,
          PageSize: 10,
          // ExternalFilter: {
          //   SearchKeywords: searchKeyword,
          //   CategoryId: category,
          //   StatusId: status,
          // },
        },
      });
    }
  }, [searchKeyword, category, status]);

  function onShowSizeChange(current, pageSize) {
    window.scrollTo(0, 0);
    dispatch({
      type: "GET_ALL_PRODUCTS_REQUEST",
      payload: {
        Page: current,
        PageSize: pageSize,
        // ExternalFilter: {
        //   SearchKeywords: searchKeyword,
        //   CategoryId: category,
        //   StatusId: status,
        // },
      },
    });
  }
  const deleteProductHandler = (id, name) => {
    dispatch({
      type: "DELETE_PRODUCT_REQUEST",
      payload: {
        data: [
          {
            Id: id,
            Name: name,
          },
        ],
        csrfToken: csrfToken,
      },
    });
  };

  return (
    <div className="menu_right">
      <>
        <div className="right_top mb-4">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive product-table">
                {isLoading ? (
                  <TableSkeleton />
                ) : (
                  <table className="table table-hover  align-middle table-nowrap mb-0">
                    <thead>
                      <tr className="table-light">
                        <th> Item Code</th>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Brand</th>

                        <th>Unit Price</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allProducts && allProducts?.length > 0 ? (
                        allProducts?.map((product, index) => {
                          return (
                            <tr key={product._id}>
                              <td>{product.ItemCode}</td>
                              <td>{product.ItemName}</td>
                              <td>{product.Category}</td>
                              <td>{product.Brand}</td>

                              <td>{product.UnitPrice}</td>

                              <td>
                                {product.IsActive ? (
                                  <Tag color="success">Active</Tag>
                                ) : (
                                  <Tag color="error">Inactive</Tag>
                                )}
                              </td>
                              <td>
                                <a
                                  onClick={() => {
                                    navigate("/inventory/add-product", {
                                      state: {
                                        product,
                                      },
                                    });
                                  }}
                                  className="btn btn-info btn-sm"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="left"
                                  title=""
                                  data-bs-original-title="Edit"
                                >
                                  <i
                                    className="fas fa-edit"
                                    aria-hidden="true"
                                  />
                                </a>
                                <Popconfirm
                                  onConfirm={() =>
                                    deleteProductHandler(
                                      product.id,
                                      product.name
                                    )
                                  }
                                  title="Are you sure you want to deactivate?"
                                  okText="Yes"
                                  cancelText="No"
                                >
                                  {product.status == 1 && (
                                    <a
                                      className="btn btn-danger btn-sm ms-1"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="left"
                                      title=""
                                      data-bs-original-title="Delete"
                                    >
                                      <i
                                        className="fas fa-eye-slash"
                                        aria-hidden="true"
                                      />
                                    </a>
                                  )}
                                </Popconfirm>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr style={{ textAlign: "center" }}>
                          <td colSpan={7}>No Products Found !</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}

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
      </>
    </div>
  );
}

export default ProductList;
