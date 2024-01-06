/** @format */

import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, mergeMap } from "rxjs/operators";
import { API } from "../helpers/baseURL";

export const getAllProducts = (action$) =>
  action$.pipe(
    ofType("GET_ALL_PRODUCTS_REQUEST"),
    mergeMap((action) =>
      from(
        API.get(
          `/product/getAllProducts?page=${action.payload.Page}&pageSize=${action.payload.PageSize}`
        )
      ).pipe(
        mergeMap((response) => {
          return of({
            type: "GET_ALL_PRODUCTS_SUCCESS",
            payload: response.data,
          });
        }),
        catchError((error) =>
          of({
            type: "GET_ALL_PRODUCTS_FAILURE",
            payload: error?.response?.data?.message?.[0]?.message,
          })
        )
      )
    )
  );

export const editProduct = (action$) =>
  action$.pipe(
    ofType("EDIT_PRODUCT_REQUEST"),
    mergeMap((action) =>
      from(API.get(`/product/editProduct/${action.payload}`)).pipe(
        mergeMap((response) => {
          return of({
            type: "EDIT_PRODUCT_SUCCESS",
            payload: response.data,
          });
        }),
        catchError((error) =>
          of({
            type: "EDIT_PRODUCT_FAILURE",
            payload: error?.response?.data?.message?.[0]?.message,
          })
        )
      )
    )
  );

export const addProduct = (action$) =>
  action$.pipe(
    ofType("ADD_PRODUCT_REQUEST"),
    mergeMap((action) =>
      from(API.post("/product/createUpdateProduct", action.payload)).pipe(
        mergeMap((response) => {
          return of({
            type: "ADD_PRODUCT_SUCCESS",
            payload: response.data,
          });
        }),
        catchError((error) =>
          of({
            type: "ADD_PRODUCT_FAILURE",
            payload: error?.response?.data?.message?.[0]?.message,
          })
        )
      )
    )
  );
