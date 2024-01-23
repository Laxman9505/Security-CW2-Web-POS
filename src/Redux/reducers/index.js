/** @format */

import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import cartReducer from "./cartReducer";
import commonReducer from "./commonReducer";
import inventoryReducer from "./inventoryReducer";
import ordersReducer from "./ordersReducer";

export const rootReducer = combineReducers({
  commonReducer,
  cartReducer,
  inventoryReducer,
  ordersReducer,
  commonReducer,
  authenticationReducer,
});
