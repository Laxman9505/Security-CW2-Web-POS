/** @format */

import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, mergeMap } from "rxjs/operators";
import { API } from "../helpers/baseURL";

export const getAllOrdersEpic = (action$) =>
  action$.pipe(
    ofType("GET_ALL_ORDERS_REQUEST"),
    mergeMap((action) =>
      from(
        API.get(
          `/order/getAllOrders?page=${action.payload.Page}&perPage=${action.payload.PageSize}`
        )
      ).pipe(
        mergeMap((response) => {
          return of({
            type: "GET_ALL_ORDERS_SUCCESS",
            payload: response.data,
          });
        }),
        catchError((error) =>
          of({
            type: "GET_ALL_ORDERS_FAILURE",
            payload: error?.response?.data?.message?.[0]?.message,
          })
        )
      )
    )
  );
export const placeOrderEpic = (action$) =>
  action$.pipe(
    ofType("PLACE_ORDER_REQUEST"),
    mergeMap((action) =>
      from(API.post(`/order/placeOrder`, action.payload)).pipe(
        mergeMap((response) => {
          return of({
            type: "PLACE_ORDER_SUCCESS",
            payload: response.data,
          });
        }),
        catchError((error) =>
          of({
            type: "PLACE_ORDER_FAILURE",
            payload: error?.response?.data?.message?.[0]?.message,
          })
        )
      )
    )
  );
