/** @format */

import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import commonReducer from "./commonReducer";

export const rootReducer = combineReducers({
  authenticationReducer,
  commonReducer,
});
