/** @format */

import React, { useEffect } from "react";
import CountUp from "react-countup";
// import CountUp from "react-countup/build/CountUp";
import { useDispatch, useSelector } from "react-redux";
import HomeSkeleton from "../components/HomeSkeleton/HomeSkeleton";
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {
  const dispatch = useDispatch();
  const { dashboardData, getDashboardDataLoading } = useSelector(
    (state) => state.commonReducer
  );

  useEffect(() => {
    dispatch({
      type: "GET_DASHBOARD_DATA_REQUEST",
    });
  }, []);

  return (
    <div className="container-fluid page-body-wrapper">
      <Sidebar />
      <div className="main-panel dashboard">
        <div className="content-wrapper">
          <div className="content mb-4">
            {/* card stats */}
            <div className="statstop">
              <div className="row">
                {getDashboardDataLoading ? (
                  <HomeSkeleton />
                ) : (
                  <>
                    <div className="col-md-8">
                      <div className="card height-100">
                        <div className="card-header border-0 align-items-center d-flex">
                          <h4 className="card-title mb-0 flex-grow-1">
                            Statistics
                          </h4>
                        </div>
                        {/* end card header */}
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="card card-animate c1">
                                <div className="card-body">
                                  <div className="d-flex justify-content-between">
                                    <div>
                                      <p className="fw-medium text-dark mb-0">
                                        Total Sales
                                      </p>
                                      <h2 className="mt-4 ff-secondary fw-semibold">
                                        <span
                                          className="counter-value"
                                          data-target={0.0}
                                        >
                                          Rs{" "}
                                        </span>
                                        <CountUp
                                          end={
                                            dashboardData?.dashboardData
                                              ?.totalSales
                                              ? dashboardData?.dashboardData
                                                  ?.totalSales
                                              : 0
                                          }
                                        />
                                      </h2>
                                      {/* <p class="mb-0 text-muted"><span class="badge bg-light text-success mb-0"> <i class="ri-arrow-up-line align-middle"></i> 16.24 % </span> vs. previous month</p> */}
                                    </div>
                                    <div>
                                      <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                          <svg
                                            height="24px"
                                            width="24px"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 296.41 296.41"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            enableBackground="new 0 0 296.41 296.41"
                                            fill="#0dcaf0"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-users text-info"
                                          >
                                            <g>
                                              <path d="m268.115,109.241l-.007-48.16-45.821-14.862-28.274-39.001-45.808,14.944-45.809-14.943-28.273,39-45.821,14.862-.007,48.161-28.295,38.963 28.296,38.964 .006,48.16 45.821,14.862 28.274,39.001 45.808-14.944 45.809,14.943 28.273-39 45.821-14.862 .007-48.161 28.295-38.963-28.295-38.964zm-171.548,25.239c-4.941-4.971-7.695-11.228-7.695-18.772v-6.753c0-7.602 2.739-13.903 7.651-18.903 4.913-4.999 12.041-7.498 21.106-7.498 9.18,0 16.095,2.499 21.006,7.498 4.913,5 7.237,11.302 7.237,18.903v6.753c0,7.603-2.254,13.874-7.167,18.813-4.912,4.943-11.94,7.412-21.003,7.412-9.122,0.001-16.193-2.484-21.135-7.453zm26.026,68.062l-13.77-6.93 62.363-99.814 13.772,6.93-62.365,99.814zm84.279-14.997c0,7.66-2.392,13.961-7.275,18.902-4.883,4.941-11.83,7.409-20.894,7.409-9.121,0-16.257-2.483-21.258-7.454-4.997-4.97-7.573-11.256-7.573-18.857v-6.754c0-7.543 2.573-13.815 7.544-18.815 4.969-5.001 12.031-7.499 21.093-7.499 9.18,0 16.183,2.487 21.066,7.454 4.883,4.972 7.297,11.258 7.297,18.86v6.754z" />
                                              <path d="m124.645,122.965c1.608-1.947 2.227-4.373 2.227-7.279v-6.711c0-2.903-0.635-5.357-2.272-7.362-1.639-2.005-3.884-3.008-6.924-3.008-2.981,0-5.504,1.003-7.14,3.008-1.637,2.005-2.664,4.459-2.664,7.362v6.711c0,2.906 1.074,5.332 2.71,7.279 1.637,1.945 4.041,2.918 7.142,2.918 2.981-1.42109e-14 5.312-0.973 6.921-2.918z" />
                                              <path d="m178.554,170.527c-3.041,0-5.485,1.005-7.12,3.008-1.641,2.005-2.562,4.432-2.562,7.278v6.708c0,2.792 1.039,5.201 2.912,7.236 1.871,2.033 4.203,3.048 6.893,3.048 3.625,0 6.03-0.899 7.318-2.702 1.284-1.8 1.877-4.327 1.877-7.582v-6.708c0-2.847-0.755-5.273-2.422-7.278-1.667-2.003-3.915-3.008-6.896-3.008z" />
                                            </g>
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end card body */}
                              </div>
                              {/* end card*/}
                            </div>
                            {/* end col*/}

                            {/* end col*/}
                            <div className="col-md-6">
                              <div className="card card-animate c3">
                                <div className="card-body">
                                  <div className="d-flex justify-content-between">
                                    <div>
                                      <p className="fw-medium text-dark mb-0">
                                        Total Orders
                                      </p>
                                      <h2 className="mt-4 ff-secondary fw-semibold">
                                        <CountUp
                                          end={
                                            dashboardData?.dashboardData
                                              ?.totalOrders
                                              ? dashboardData?.dashboardData
                                                  ?.totalOrders
                                              : 0
                                          }
                                        />
                                      </h2>
                                      {/* <p class="mb-0 text-muted"><span class="badge bg-light text-success mb-0"> <i class="ri-arrow-up-line align-middle"></i> 16.24 % </span> vs. previous month</p> */}
                                    </div>
                                    <div>
                                      <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                          <svg
                                            fill="#0dcaf0"
                                            height="24px"
                                            width="24px"
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 512 512"
                                            xmlSpace="preserve"
                                          >
                                            <g
                                              id="SVGRepo_bgCarrier"
                                              strokeWidth={0}
                                            />
                                            <g
                                              id="SVGRepo_tracerCarrier"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <g id="SVGRepo_iconCarrier">
                                              {" "}
                                              <path
                                                style={{ fill: "#82DCC7" }}
                                                d="M350.541,424.787c-43.196,26.652-96.56,36.827-149.853,24.206 C94.101,423.748,28.161,316.879,53.404,210.292s132.114-172.527,238.7-147.284c104.606,24.775,170.052,128.17,148.587,232.758 l-24.395-5.777l28.222,94.215L512,312.656l-24.568-5.819C514.996,176.44,433.577,47.178,303.168,16.291 C170.781-15.063,38.042,66.841,6.687,199.227s50.549,265.126,182.936,296.481c66.193,15.677,132.475,3.04,186.128-30.065"
                                              />{" "}
                                              <polygon
                                                style={{ fill: "#FED159" }}
                                                points="320.74,206.115 320.74,177.679 267.883,177.679 267.883,141.05 239.448,141.05 239.448,177.679 186.592,177.679 186.592,270.218 292.304,270.218 292.304,305.886 186.592,305.886 186.592,334.32 239.448,334.32 239.448,370.951 267.883,370.951 267.883,334.32 320.74,334.32 320.74,241.783 215.028,241.783 215.028,206.115 "
                                              />{" "}
                                            </g>
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end card body */}
                              </div>
                              {/* end card*/}
                            </div>
                            <div className="col-md-6">
                              <div className="card card-animate c2">
                                <div className="card-body">
                                  <div className="d-flex justify-content-between">
                                    <div>
                                      <p className="fw-medium text-dark mb-0">
                                        Total Products
                                      </p>
                                      <h2 className="mt-4 ff-secondary fw-semibold">
                                        <span
                                          className="counter-value"
                                          data-target={0.0}
                                        ></span>
                                        <CountUp
                                          end={
                                            dashboardData?.dashboardData
                                              ?.totalProducts
                                              ? dashboardData?.dashboardData
                                                  ?.totalProducts
                                              : 0
                                          }
                                        />
                                      </h2>
                                      {/* <p class="mb-0 text-muted"><span class="badge bg-light text-success mb-0"> <i class="ri-arrow-up-line align-middle"></i> 16.24 % </span> vs. previous month</p> */}
                                    </div>
                                    <div>
                                      <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                          <svg
                                            height="24px"
                                            width="24px"
                                            fill="#0dcaf0"
                                            version="1.1"
                                            id="Capa_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 425.832 425.833"
                                            xmlSpace="preserve"
                                            stroke="#0dcaf0"
                                          >
                                            <g
                                              id="SVGRepo_bgCarrier"
                                              strokeWidth={0}
                                            />
                                            <g
                                              id="SVGRepo_tracerCarrier"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <g id="SVGRepo_iconCarrier">
                                              {" "}
                                              <g>
                                                {" "}
                                                <path d="M377.763,83.169l-86.238-80.33c-1.957-1.83-4.54-2.839-7.21-2.839H55.291c-5.855,0-10.597,4.742-10.597,10.59v404.647 c0,5.843,4.742,10.595,10.597,10.595H370.54c5.854,0,10.599-4.74,10.599-10.595V90.92 C381.134,87.979,379.915,85.172,377.763,83.169z M108.599,388.26c0-8.273,6.735-15.011,15.018-15.011 c8.282,0,15.012,6.737,15.012,15.011c0,8.284-6.73,15.016-15.012,15.016C115.334,403.276,108.599,396.544,108.599,388.26z M185.611,388.26c0-8.273,6.736-15.011,15.019-15.011c8.275,0,15.003,6.737,15.003,15.011c0,8.284-6.728,15.016-15.003,15.016 C192.347,403.276,185.611,396.544,185.611,388.26z M360.118,404.654l-135.527-0.131c3.152-4.641,5.007-10.238,5.007-16.258 c0-15.983-12.993-28.974-28.968-28.974c-15.981,0-28.983,12.99-28.983,28.974c0,6.003,1.839,11.574,4.972,16.214l-28.979-0.031 c3.126-4.618,4.952-10.191,4.952-16.183c0-15.983-12.994-28.974-28.975-28.974c-15.98,0-28.98,12.99-28.98,28.974 c0,5.971,1.814,11.519,4.925,16.132l-33.844-0.033l0.252-134.205L87.207,355.1h144.215l69.822-160.598h21.06 c5.79,0,10.476-4.69,10.476-10.473c0-5.782-4.686-10.471-10.476-10.471h-34.79l-69.828,160.589h-114.13l-17.453-69.821h108.77 c5.79,0,10.473-4.691,10.473-10.468c0-5.791-4.684-10.486-10.473-10.486H66.021l0.005-3.951V21.17h197.629v79.471 c0,5.844,4.738,10.585,10.583,10.585h85.88V404.654z" />{" "}
                                              </g>{" "}
                                            </g>
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* end card body */}
                              </div>
                              {/* end card*/}
                            </div>
                            <div className="col-md-6">
                              <div className="card card-animate c4">
                                <div className="card-body">
                                  <div className="d-flex justify-content-between">
                                    <div>
                                      <p className="fw-medium text-dark mb-0">
                                        Total Customers
                                      </p>
                                      <h2 className="mt-4 ff-secondary fw-semibold">
                                        <span
                                          className="counter-value"
                                          data-target={0.0}
                                        ></span>
                                        '{" "}
                                        <CountUp
                                          end={
                                            dashboardData?.dashboardData
                                              ?.customers
                                              ? dashboardData?.dashboardData
                                                  ?.customers
                                              : 0
                                          }
                                        />
                                        '
                                      </h2>
                                      {/* <p class="mb-0 text-muted"><span class="badge bg-light text-success mb-0"> <i class="ri-arrow-up-line align-middle"></i> 16.24 % </span> vs. previous month</p> */}
                                    </div>
                                    <div>
                                      <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-users text-info"
                                          >
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* end col*/}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="card height-100 border-0">
                        <div className="card-header align-items-center d-flex border-0">
                          <h4 className="card-title ">
                            Recently Added Products
                          </h4>
                        </div>
                        {/* end card header */}
                        <div className="card-body">
                          <div className="table-responsive table-card card_height">
                            <table className="table table-hover  align-middle table-nowrap mb-0 ">
                              <thead className="text-muted table-light">
                                <tr>
                                  <th scope="col" style={{ width: 62 }}>
                                    #
                                  </th>
                                  <th scope="col">Product Name</th>
                                  <th scope="col">Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {dashboardData?.recentlyAddedProducts?.map(
                                  (item, index) => {
                                    return (
                                      <tr key={index + 1}>
                                        <td>{index + 1}</td>
                                        <td>
                                          <a>{item.ItemName}</a>
                                        </td>
                                        <td>Rs {item.UnitPrice}</td>
                                      </tr>
                                    );
                                  }
                                )}

                                {/* end */}

                                {/* end */}
                              </tbody>
                              {/* end tbody */}
                            </table>
                            {/* end table */}
                          </div>
                          {/* end */}
                        </div>
                        {/* end cardbody */}
                      </div>
                      {/* end card */}
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* card */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
