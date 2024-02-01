/** @format */

import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, mergeMap } from "rxjs/operators";
import { API } from "../helpers/baseURL";

export const loginEpic = (action$) =>
  action$.pipe(
    ofType("LOGIN_REQUEST"),
    mergeMap((action) =>
      from(
        API.post("/auth/login", {
          ...action.payload,
        })
      ).pipe(
        mergeMap((response) => {
          return of({
            type: "LOGIN_SUCCESS",
            payload: response.data,
          });
        }),
        catchError((error) =>
          of({
            type: "LOGIN_FAILURE",
            payload: error.response,
          })
        )
      )
    )
  );
export const validateOTPEpic = (action$) =>
  action$.pipe(
    ofType("VALIDATE_OTP_REQUEST"),
    mergeMap((action) =>
      from(
        API.post("/auth/verify-otp-and-login", {
          ...action.payload,
        })
      ).pipe(
        mergeMap((response) => {
          return of({
            type: "VALIDATE_OTP_SUCCESS",
            payload: response.data,
          });
        }),
        catchError((error) =>
          of({
            type: "VALIDATE_OTP_FAILURE",
            payload: error.response,
          })
        )
      )
    )
  );
export const sendOTPtoMail = (action$) =>
  action$.pipe(
    ofType("SEND_OTP_REQUEST"),
    mergeMap((action) =>
      from(
        API.post("/auth/send-otp", {
          ...action.payload,
        })
      ).pipe(
        mergeMap((response) => {
          return of({
            type: "SEND_OTP_SUCCESS",
            payload: response.data,
          });
        }),
        catchError((error) =>
          of({
            type: "SEND_OTP_FAILURE",
            payload: error.response,
          })
        )
      )
    )
  );

export const registerOnBoardUserEpic = (action$) =>
  action$.pipe(
    ofType("REGISTER_USER_REQUEST"),
    mergeMap((action) =>
      from(API.post("/auth/onboard", action.payload)).pipe(
        mergeMap((response) => {
          return of({
            type: "REGISTER_USER_SUCCESS",
            payload: response.data,
          });
        }),
        catchError((error) =>
          of({
            type: "REGISTER_USER_FAILURE",
            payload: error?.response,
          })
        )
      )
    )
  );

export const getDashboardDataEpic = (action$) =>
  action$.pipe(
    ofType("GET_DASHBOARD_DATA_REQUEST"),
    mergeMap((action) =>
      from(API.get("/getDashboardData")).pipe(
        mergeMap((response) => {
          return of({
            type: "GET_DASHBOARD_DATA_SUCCESS",
            payload: response.data,
          });
        }),
        catchError((error) =>
          of({
            type: "GET_DASHBOARD_DATA_FAILURE",
            payload: error?.response?.data?.message?.[0]?.message,
          })
        )
      )
    )
  );
