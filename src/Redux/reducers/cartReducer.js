/** @format */

import { getLocalStorage, setLocalStorage } from "../../helpers/frontendHelper";

import { openNotificationWithIcon } from "../../components/Notification/Notification.tsx";

const initialState = {
  cartProducts:
    getLocalStorage("cartData") || getLocalStorage("cartData")?.length > 0
      ? getLocalStorage("cartData")
      : [],
};

export default function (state = initialState, action) {
  const { type, payload, notification } = action;
  let cartData = [...state.cartProducts];
  switch (type) {
    case "SET_ITEM_CART":
      // cartData = cartData.filter((product) => {
      //   return product.ProductVariationId !== payload.ProductVariationId;
      // });
      cartData.push(payload);
      setLocalStorage("cartData", cartData);
      if (notification !== "off") {
        openNotificationWithIcon("success", "Added to Cart !");
      }
      return {
        ...state,
        cartProducts: cartData,
      };

    case "REMOVE_ITEM_CART":
      const newData = cartData.filter(
        (cartItem, index) => index != payload?.index
      );

      setLocalStorage("cartData", newData);
      return {
        ...state,
        cartProducts: newData,
      };
    case "ADD_QUANTITY_ITEM":
      cartData[cartData.indexOf(payload)].Quantity =
        state.cartProducts[state.cartProducts.indexOf(payload)].Quantity + 1;

      setLocalStorage("cartData", cartData);
      return {
        ...state,
        cartProducts: cartData,
      };
    case "SUBTRACT_QUANTITY_ITEM":
      if (cartData[cartData.indexOf(payload)].Quantity > 1) {
        cartData[cartData.indexOf(payload)].Quantity =
          state.cartProducts[state.cartProducts.indexOf(payload)].Quantity - 1;
      }
      setLocalStorage("cartData", cartData);
      return {
        ...state,
        cartProducts: cartData,
      };

    case "CLEAR_CART":
      localStorage.removeItem("cartData");
      return {
        ...state,
        cartProducts: [],
      };
    default:
      return state;
  }
}
