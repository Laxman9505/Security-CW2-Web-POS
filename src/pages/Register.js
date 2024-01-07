/** @format */

import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";

function Register({ setShowRegisterModal }) {
  const {
    sendOTPLoading,

    isSendOTPSuccess,

    registerError,

    isResendOTPSuccess,

    isOperationSuccessful,
    registerUserLoading,
    registerationError,
  } = useSelector((state) => state.authenticationReducer);
  const dispatch = useDispatch();

  const [otpForm] = Form.useForm();
  const [RegisterForm] = Form.useForm();
  const [otp, setOTP] = useState("");
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  const onRegisterFormSubmit = (values) => {
    const formData = new FormData();
    const request = {
      OTP: values.verificationCode,
      FullName: values.fullName,
      Password: values.password,
      Email: otpForm.getFieldValue("Email"),
      ConfirmPassword: values.confirmPassword,
      PhoneNumber: values.phone,
    };
    formData.append("Request", JSON.stringify(request));

    if (image) {
      formData.append("image", image);
    }
    dispatch({
      type: "REGISTER_USER_REQUEST",
      payload: formData,
    });
  };
  const onOTPFormSubmit = (values) => {
    dispatch({
      type: "SEND_OTP_REQUEST",
      payload: {
        Email: values.Email,
      },
    });
  };

  useEffect(() => {
    if (isOperationSuccessful) {
      RegisterForm.resetFields();
    }
  }, [isOperationSuccessful]);

  return (
    <>
      <div className=" login log1 categoryField">
        <div className="card2 card border-0 px-3 py-3">
          {isSendOTPSuccess && (
            <Form
              className="login"
              name="form"
              onFinish={onRegisterFormSubmit}
              autoComplete="off"
              initialValues={{
                remember: true,
              }}
              form={RegisterForm}
            >
              <div className="row ">
                <div className="  col-md-12 col-lg-12 otp-container">
                  {/* <p className="verification-text ant-label">
                    Enter Verification Code:
                  </p> */}
                  <Alert variant="info">
                    We Have {isResendOTPSuccess && "Re-"} Sent Verifcation Code
                    To Your Email. Please Check And Enter Verification Code Here
                    ! Your OTP will expire in 5 minutes.{" "}
                  </Alert>
                  {registerationError && (
                    <Alert variant="danger">{registerationError}</Alert>
                  )}

                  <Form.Item
                    label="Verification Code"
                    name="verificationCode"
                    rules={[
                      {
                        required: true,
                        message: "Please input Verification Code !",
                      },
                    ]}
                  >
                    <OtpInput
                      className="verification-container"
                      inputStyle={"ant-input"}
                      value={otp}
                      onChange={(e) => setOTP(e)}
                      numInputs={6}
                    />
                  </Form.Item>
                </div>

                <div className="  col-md-12 col-lg-6">
                  <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your full name!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter Full Name"
                      className="form-control"
                    />
                  </Form.Item>
                </div>

                <div className="  col-md-6 col-lg-6 phone-input">
                  {" "}
                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                      // {
                      //   pattern: selectedPhoneNumberRegex,
                      //   message: "Please enter a valid phone number",
                      // },
                    ]}
                  >
                    <Input placeholder="Enter Phone" />
                  </Form.Item>
                </div>

                <div className="  col-md-12 col-lg-6">
                  {" "}
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Enter password"
                      className="form-control"
                    />
                  </Form.Item>
                </div>
                <div className=" col-md-12 col-lg-6">
                  {" "}
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input confirm password!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Enter Confirm Password"
                      className="form-control"
                    />
                  </Form.Item>
                </div>

                <div className=" col-md-12 col-lg-6">
                  {" "}
                  <Form.Item
                    label="User Image"
                    name="image"
                    rules={[
                      {
                        required: true,
                        message: "Please upload your image!",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                        setImagePreview(URL.createObjectURL(e.target.files[0]));
                      }}
                      type="file"
                      placeholder="User Image"
                    />
                  </Form.Item>
                </div>
                <div className="col-md-3">
                  <div className="giftupload inv_img mt-2">
                    <img
                      src={
                        imagePreview
                          ? imagePreview
                          : "assets/images/imagePlaceholder.png"
                      }
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className=" mb-3  mt-3">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={registerUserLoading}
                      className="primary-button"
                    >
                      {" "}
                      Register
                    </Button>
                    <Button
                      className="primary-button ms-2"
                      type="danger"
                      onClick={() => {
                        setShowRegisterModal(false);
                        dispatch({
                          type: "CLEAR_FORM",
                        });
                      }}
                    >
                      Cancel
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </Form>
          )}
          {!isSendOTPSuccess && (
            <Form
              className="login"
              name="form"
              onFinish={onOTPFormSubmit}
              autoComplete="off"
              initialValues={{
                remember: true,
              }}
              form={otpForm}
            >
              <div className="row">
                <div className="  col-md-12 col-lg-12">
                  {registerError && (
                    <Alert variant="danger">{registerError}</Alert>
                  )}
                  <Form.Item
                    label="Email Address"
                    name="Email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                      {
                        type: "email",
                        message: "Please enter valid email!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter email" />
                  </Form.Item>
                </div>

                <div className=" mb-3  mt-3">
                  <Form.Item>
                    <Button
                      className="primary-button"
                      style={{ width: "30%" }}
                      type="primary"
                      htmlType="submit"
                      loading={sendOTPLoading}
                    >
                      {" "}
                      {sendOTPLoading ? "" : "Send OTP"}
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </Form>
          )}
        </div>
      </div>
    </>
  );
}

export default Register;
