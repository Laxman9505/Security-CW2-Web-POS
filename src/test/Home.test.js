/** @format */

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux"; // Import Provider
import { createStore } from "redux"; // Import createStore
import Home from "../pages/Home"; // Replace with the correct path to your Home component

import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Error occurred in this component.</div>;
    }
    return this.props.children;
  }
}

// Mock the Redux store
const initialState = {
  commonReducer: {
    dashboardData: {
      totalSales: 100,
      totalOrders: 50,
      totalProducts: 200,
      customers: 150,
      recentlyAddedProducts: [],
    },
    getDashboardDataLoading: false,
  },
};

function reducer(state = initialState, action) {
  return state;
}

const store = createStore(reducer); // Create a mock store

describe("Home Component", () => {
  it("renders the 'Statistics' heading", () => {
    render(
      <Provider store={store}>
        {" "}
        {/* Wrap the component in Provider */}
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      </Provider>
    );

    // Assertions
    expect(screen.getByText("Statistics")).toBeInTheDocument();
    // Add more assertions if needed
  });

  // Other test cases...
});
