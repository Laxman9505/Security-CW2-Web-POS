/** @format */

import { Alert, Button, Form } from "antd";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";

const ValidateOTP = () => {
  const [otpForm] = Form.useForm();
  const dispatch = useDispatch();
  const [otp, setOTP] = useState("");
  const { isVerifyLoading, isOTPVerifySuccess } = useSelector(
    (state) => state.authenticationReducer
  );

  const onValidateOTP = () => {
    dispatch({
      type: "VALIDATE_OTP_REQUEST",
      payload: {
        Email: "gmx9505@gmail.com",
        OTP: otp,
      },
    });
  };

  useEffect(() => {
    if (isOTPVerifySuccess) {
      window.location.replace("/");
    }
  }, [isOTPVerifySuccess]);

  return (
    <div
      className=" login log1 categoryField d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card2 card border-0 px-3 py-3 w-50 ">
        <Form
          className="login"
          name="form"
          onFinish={onValidateOTP}
          autoComplete="off"
          initialValues={{
            remember: true,
          }}
          form={otpForm}
        >
          <div className="row ">
            <h4 className="m-auto mb-4">Verify OTP</h4>
            <div className="col-md-12 col-lg-12 otp-container categoryField">
              {/* <p className="verification-text ant-label">
                    Enter Verification Code:
                  </p> */}
              <Alert
                type="warning"
                message="  We Have Sent Verifcation Code To Your Email. Please Check And
                Enter Verification Code Here ! Your OTP will expire in 5
                minutes"
              />

              {/* {registerationError && (
                <Alert variant="danger">{registerationError}</Alert>
              )} */}

              <Form.Item
                label="Verification Code"
                name="verificationCode"
                className="categoryField mt-4"
                rules={[
                  {
                    required: true,
                    message: "Please input Verification Code !",
                  },
                ]}
              >
                <OtpInput
                  className="verification-container "
                  inputStyle={"ant-input"}
                  value={otp}
                  onChange={(e) => setOTP(e)}
                  numInputs={6}
                />
              </Form.Item>
            </div>

            <div className=" mb-3  mt-3">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isVerifyLoading}
                  className="primary-button"
                >
                  {" "}
                  Verify
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ValidateOTP;
