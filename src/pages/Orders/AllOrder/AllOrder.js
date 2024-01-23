/** @format */

import { Button, Empty, Modal, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardSkeleton from "../../../components/CardSkeleton/CardSkeleton";
import ViewOrder from "../ViewOrder";

const AllOrder = ({}) => {
  const dispatch = useDispatch();
  const { isLoading, allOrdersList } = useSelector(
    (state) => state.ordersReducer
  );
  const [isViewOrderOpen, setIsViewOrderOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState("");
  useEffect(() => {
    dispatch({
      type: "GET_ALL_ORDERS_REQUEST",
      payload: {
        Page: 1,
        PageSize: 10,
      },
    });
  }, []);
  function onShowSizeChange(current, pageSize) {
    window.scrollTo(0, 0);
    dispatch({
      type: "GET_ALL_ORDERS_REQUEST",
      payload: {
        Page: current,
        PageSize: pageSize,
      },
    });
  }

  return (
    <>
      <Modal
        width={1000}
        open={isViewOrderOpen}
        onCancel={() => {
          setIsViewOrderOpen(false);
        }}
        footer={null}
      >
        <ViewOrder order={activeOrder} />
      </Modal>
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="d-flex justify-content-between flex-wrap align-items-center">
            <div className="d-flex align-items-end flex-wrap">
              <div className="mr-md-3 mr-xl-5">
                <h5 className="fw-bold">All Orders</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <CardSkeleton />
      ) : (
        <div className="orderfilter">
          <div className="row  d-flex justify-content-flex-start">
            {allOrdersList ? (
              allOrdersList?.items?.map((item) => (
                <div
                  className="col-md-3 col-xxl-3 pb-3 grid-margin stretch-card"
                  key={item._id}
                >
                  <div className="card h-100  shadow border-0">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between tablecard_img">
                        <div className="row justify-content-between">
                          <div className="d-flex align-items-center col-md-12">
                            <label className="text-danger text-center d-flex align-items-center justify-content-center fw-bold">
                              {item.CustomerName}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="template-demo">
                        <table className="table mb-0 ">
                          <tbody>
                            <tr>
                              <td
                                className="pe-0 text-start fw-bold"
                                colSpan={2}
                              >
                                {item.OrderId}
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-0">Customer Address</td>
                              <td className="pe-0 text-end">
                                {item.CustomerAddress}
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-0">Order Date</td>
                              <td className="pe-0 text-end">
                                {item.OrderDate}
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-0">Order Status</td>
                              <td className="pe-0 text-end">
                                <span className="badge bg-success">
                                  {item.OrderStatus}
                                </span>
                              </td>
                            </tr>

                            <tr className="border-dashed bordercolor">
                              <td className="ps-0">Total</td>
                              <td className="pe-0 text-end">
                                {"Rs"} {item.TotalAmount}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="mybtn d-flex">
                          <Button
                            style={{ background: "#00205A", color: "#fff" }}
                            className="btn text-white btn-sm bg-theme border-0 w-100 me-2"
                            onClick={() => {
                              setActiveOrder(item);
                              setIsViewOrderOpen(true);
                            }}
                          >
                            View Order
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Empty description="No Orders Found !" />
            )}
          </div>
          <div className="company_footer d-flex justify-content-end mt-3">
            {allOrdersList?.totalItems > 0 && (
              <Pagination
                pageSize={8}
                total={allOrdersList?.totalItems}
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                showTotal={(total) => (
                  <span className="fw-bold"> Total {total} items</span>
                )}
                // pageSize={100}
                // defaultCurrent={1}
                onChange={onShowSizeChange}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AllOrder;
