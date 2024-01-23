/** @format */

import { Form } from "antd";
import React from "react";
import Skeleton from "react-loading-skeleton";
import FormItemSkeleton from "../../components/FormItemSkeleton/FormItemSkeleton";

const AddProductSkeleton = () => {
  return (
    <Form>
      <div className="row categoryField">
        {/* Items form */}
        <div className="card p-0 border-0 rounded-3">
          <div className="card-body bg-light-red">
            <div className="row addacc_form suppliernewitem_form">
              <div className="form-group col-md-4">
                <div className=" pt-0">
                  <FormItemSkeleton />
                </div>
              </div>
              {/* end row */}
              <div className="form-group col-md-4">
                <div className=" pt-0">
                  <FormItemSkeleton />
                </div>
              </div>
              {/* end row */}
              <div className="form-group col-md-4">
                <FormItemSkeleton />
              </div>
              {/* end row */}
              <div className="form-group col-md-4">
                <FormItemSkeleton />
              </div>
              <div className="form-group col-md-4">
                <FormItemSkeleton />
              </div>
              {/* end row */}
              <div className="form-group col-md-4">
                <FormItemSkeleton />
              </div>
              {/* end row */}
              {/* end row */}
              <div className="form-group col-md-4">
                <FormItemSkeleton />
              </div>
              {/* end row */}
              <div className="form-group col-md-4">
                <FormItemSkeleton />
              </div>
              {/* end row */}
              {/* end row */}
              <div className="form-group col-md-4">
                <FormItemSkeleton />
              </div>
              <div className="form-group col-md-4">
                <FormItemSkeleton />
              </div>
              <div className="form-group col-md-4">
                <FormItemSkeleton />
              </div>
              <div className="form-group col-md-1">
                <FormItemSkeleton />
              </div>
              <div className="form-group col-md-1">
                <FormItemSkeleton />
              </div>
              {/* end row */}
              <div className="row">
                <div className="col-md-12">
                  <div className=" bg-light-blue p-3 ">
                    <div className="row g-0">
                      <>
                        <div className="col-md-12">
                          <div>
                            <Skeleton count={0.3} height={30} inline={true} />
                          </div>
                        </div>
                        <div className=" form-group col-md-12 g-2">
                          {/* <hr /> */}
                          <div className=" ">
                            <div className="row control-group ">
                              <div className="col-md-3 ">
                                <FormItemSkeleton />
                              </div>
                              <div className="col-md-3 ">
                                <FormItemSkeleton />
                              </div>
                              <div className="col-md-3 ">
                                <FormItemSkeleton />
                              </div>
                              <div className="col-md-3 ">
                                <FormItemSkeleton />
                              </div>
                              <div className="col-md-3 ">
                                <FormItemSkeleton />
                              </div>
                              <div className="col-md-3 ">
                                <FormItemSkeleton />
                              </div>
                              <div className="col-md-3 ">
                                <FormItemSkeleton />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="bg-light-blue p-3 h-100 ">
                    <div className="row ">
                      <>
                        <div>
                          <div className="row control-group align-items-center">
                            <div className="col-md-5 ">
                              <FormItemSkeleton />
                            </div>
                            <div className="col-md-5 ">
                              <FormItemSkeleton />
                            </div>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                </div>
                <div className=" col-md-4 mt-3 ">
                  <div className="bg-light-blue p-3 h-100">
                    <FormItemSkeleton />
                    {/* </Spin> */}
                  </div>
                </div>
                <div className="col-md-4 mt-3 "></div>
              </div>
              <div className="row ">
                <div>
                  <Skeleton count={0.1} height={40} inline={true} />
                  <Skeleton count={0.1} height={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default AddProductSkeleton;
