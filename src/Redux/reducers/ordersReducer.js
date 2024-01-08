/** @format */
import { openNotificationWithIcon } from "../../components/Notification/Notification.tsx";

const initialState = {
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_ORDERS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_ALL_ORDERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        getOrderDetailSectionLoading: false,
        allOrdersList: payload,
      };

    case "GET_ALL_ORDERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        getOrderDetailSectionLoading: false,
      };

    case "GET_ORDER_DETAIL_BY_ID_REQUEST":
      return {
        ...state,
        getLoading: true,
        deleteSuccess: false,
      };

    case "GET_ORDER_DETAIL_BY_ID_SUCCESS":
      return {
        ...state,
        getLoading: false,
        payLoading: false,
        orderDetails: payload,
      };

    case "GET_ORDER_DETAIL_BY_ID_FAILURE":
      return {
        ...state,
        getLoading: false,
      };
    case "RESET_STATE_ORDER_REDUCER":
      return {
        ...state,
        orderDetails: {},
        printingData: null,
      };
    case "PLACE_ORDER_REQUEST":
      return {
        ...state,
        placeOrderLoading: true,
        isPlaceOrderSuccess: false,
      };
    case "PLACE_ORDER_SUCCESS":
      openNotificationWithIcon("success", payload?.msg);

      return {
        ...state,
        placeOrderLoading: false,
        isPlaceOrderSuccess: true,
      };
    case "PLACE_ORDER_FAILURE":
      openNotificationWithIcon("error", "Something Went Wrong");

      return {
        ...state,
        placeOrderLoading: false,
        isPlaceOrderSuccess: false,
      };
    default:
      return state;
  }
}
