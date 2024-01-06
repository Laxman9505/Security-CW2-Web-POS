/** @format */

import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";

export const rootReducer = combineReducers({
  authenticationReducer,
});
