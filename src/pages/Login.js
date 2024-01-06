/** @format */

import { Alert, Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const loginSubmitHandler = (values) => {
    dispatch({
      type: "LOGIN_REQUEST",
      payload: values,
    });
  };
  const [form] = Form.useForm();

  const {
    error,
    isLoading,
    isLoggedIn,
    isOperationSuccessful,
    isSendOTPSuccess,
  } = useSelector((state) => state.authenticationReducer);

  useEffect(() => {
    if (isLoggedIn) {
      window.location.replace("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isOperationSuccessful) {
      setShowRegisterModal(false);
      dispatch({
        type: "CLEAR_FORM",
      });
    }
  }, [isOperationSuccessful]);

  return (
    <div
      className="container-scroller h100 loginPage"
      style={{ background: "#fff" }}
    >
      {/* partial */}
      <div className="container pt-4 categoryField">
        <section className="">
          <div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
            <div className="col-12 col-md-8  ">
              <div className="card shadow" style={{ background: "#F0F2F5" }}>
                <div className="card-body ">
                  <div className="d-flex gap-4 row">
                    <div className="col-md-6">
                      <img
                        src="assets/images/splash.png"
                        className="w-80 img-fluid"
                        alt="login"
                      />

                      <h4 className="fw-bold mt-4 text-center fs-3 mb-0 ">
                        Welcome Back
                      </h4>
                      <p className=" mt-0">Login into your account</p>

                      {error && (
                        <Alert
                          message={error}
                          type="error"
                          //   showIcon
                          //   icon={<InfoCircleOutlined />}
                          style={{
                            fontSize: "13px",
                            margin: "15px 0",
                            textAlign: "left",
                          }}
                        />
                      )}
                      <Form
                        name="form"
                        form={form}
                        autoComplete="off"
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={loginSubmitHandler}
                      >
                        <Form.Item
                          name="Email"
                          label="Email"
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
                          <Input
                            // addonBefore={<UserOutlined />}
                            style={{ background: "white" }}
                            placeholder="Enter Email"
                          />
                        </Form.Item>
                        <Form.Item
                          label="Password "
                          name="Password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                        >
                          <Input
                            // prefix={<VerifiedUserOutlined />}
                            type="password"
                            style={{ background: "white" }}
                            placeholder="Enter Password"
                          />
                        </Form.Item>

                        <Form.Item>
                          <Button
                            className="btn btn-success btn-block w-100"
                            htmlType="submit"
                            loading={isLoading}
                            style={{
                              height: "48px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "10px",
                            }}
                          >
                            Login
                          </Button>
                        </Form.Item>
                      </Form>
                      <p className="text-center">
                        Dont have an account ?{" "}
                        <a
                          onClick={(e) => {
                            setShowRegisterModal(true);
                          }}
                          className="text-danger"
                        >
                          <span className="ms-1 fw-bold">Sign up</span>
                        </a>
                      </p>
                    </div>
                    <div className="col-md-5">
                      <img
                        className="w-100"
                        src="assets/images/login_image.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* page-body-wrapper ends */}
    </div>
  );
}

export default Login;
