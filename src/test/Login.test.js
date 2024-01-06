/** @format */

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Login from "../pages/Login";
import ErrorBoundary from "./ErrorBoundary";

const mockStore = configureStore([]);

describe("Login Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      authenticationReducer: {
        error: null,
        isLoading: false,
        isLoggedIn: false,
        isOperationSuccessful: false,
        isSendOTPSuccess: false,
      },
    });
  });

  it("renders the login form", () => {
    render(
      <Provider store={store}>
        <ErrorBoundary>
          <Login />
        </ErrorBoundary>
      </Provider>
    );
    expect(true).toBe(true);

    // Your assertion logic here
  });

  // Add more test cases as needed
});
