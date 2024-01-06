/** @format */

import { openNotificationWithIcon } from "../../components/Notification/Notification.tsx";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../helpers/frontendHelper";

const initialState = {
  isLoading: false,
  loginSuccess: false,
  userDetails: getLocalStorage("userDetails"),
  error: null,
  token: getLocalStorage("token"),
  isLoggedIn: !!getLocalStorage("token"),
  sendOTPLoading: false,
  isSendOTPSuccess: false,
  registerUserLoading: false,
  registerationError: "",
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SEND_OTP_REQUEST":
      return {
        ...state,
        sendOTPLoading: true,
        isSendOTPSuccess: false,
      };

    case "SEND_OTP_SUCCESS":
      return {
        ...state,
        sendOTPLoading: false,
        success: payload.message,
        isSendOTPSuccess: true,
      };
    case "SEND_OTP_FAILURE":
      openNotificationWithIcon("error", payload);
      return {
        ...state,
        sendOTPLoading: false,
        error: payload,
        isSendOTPSuccess: false,
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
        success: null,
        data: null,
      };

    case "LOGIN_SUCCESS":
      console.log("---payload", payload);
      setLocalStorage("token", payload.token);
      setLocalStorage("userDetails", {
        image: payload?.user?.UserImage,
        name: payload?.user?.FullName,
        userId: payload?.user?._id,
      });

      return {
        ...state,
        isLoading: false,
        succes: true,
        data: payload,
        token: payload.token,
        isLoggedIn: true,
        loginSuccess: true,
        userDetails: {
          image: payload?.user?.UserImage,
          name: payload?.user?.FullName,
          userId: payload?.user?._id,
        },
      };

    case "LOGIN_FAILURE":
      // alert(payload);
      openNotificationWithIcon("error", payload?.data?.message);
      return {
        ...state,
        isLoading: false,
        success: null,
      };

    case "CLEAR_FORM":
      return {
        ...state,
        isSendOTPSuccess: false,
        isCLearForm: true,
      };

    case "REGISTER_USER_REQUEST":
      return {
        ...state,
        registerUserLoading: true,
        isOperationSuccessful: false,
      };
    case "REGISTER_USER_SUCCESS":
      setLocalStorage("token", payload.token);
      setLocalStorage("userDetails", {
        image: payload?.user?.UserImage,
        name: payload?.user?.FullName,
        userId: payload?.user?._id,
      });

      return {
        ...state,
        isLoading: false,
        succes: true,
        data: payload,
        token: payload.token,
        isLoggedIn: true,
        loginSuccess: true,
        userDetails: {
          image: payload?.user?.UserImage,
          name: payload?.user?.FullName,
          userId: payload?.user?._id,
        },
      };
    case "REGISTER_USER_FAILURE":
      openNotificationWithIcon("error", payload?.data?.message);

      return {
        ...state,
        registerUserLoading: false,
        isOperationSuccessful: false,
      };

    case "LOGOUT":
      removeLocalStorage("token");
      removeLocalStorage("userDetails");
      setLocalStorage("cartData", []);
      window.location.replace("/login");
      return {
        ...state,
        token: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
}
