/** @format */

const initialState = {
  isLoading: false,
  error: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_DASHBOARD_DATA_REQUEST":
      return {
        ...state,
        getDashboardDataLoading: true,
      };
    case "GET_DASHBOARD_DATA_SUCCESS":
      return {
        ...state,
        dashboardData: payload,
        getDashboardDataLoading: false,
      };
    case "GET_DASHBOARD_DATA_FAILURE":
      return {
        ...state,
        getDashboardDataLoading: false,
      };

    default:
      return state;
  }
}
