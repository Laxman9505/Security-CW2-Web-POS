/** @format */

import { openNotificationWithIcon } from "../../components/Notification/Notification.tsx";
const initialState = {
  isLoading: false,
  error: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_PRODUCTS_REQUEST":
      return {
        ...state,
        isLoading: true,
        addSuccess: false,
      };
    case "GET_ALL_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        allProducts: payload.items,
        totalProducts: payload.totalItems,
      };
    case "GET_ALL_PRODUCTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case "ADD_PRODUCT_REQUEST":
      return {
        ...state,
        addLoading: true,
      };
    case "ADD_PRODUCT_SUCCESS":
      openNotificationWithIcon("success", payload.message);
      return {
        ...state,
        addLoading: false,
        addSuccess: payload,
      };
    case "ADD_PRODUCT_FAILURE":
      openNotificationWithIcon("error", payload);
      return {
        ...state,
        addLoading: false,
        error: payload,
      };

    case "DELETE_PRODUCT_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_PRODUCT_SUCCESS":
      openNotificationWithIcon("success", payload.message[0].message);
      return {
        ...state,
        isLoading: false,
        deactivateSuccess: payload,
      };
    case "DELETE_PRODUCT_FAILURE":
      openNotificationWithIcon("error", payload);
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case "EDIT_PRODUCT_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "EDIT_PRODUCT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        editData: payload,
      };
    case "EDIT_PRODUCT_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
}
