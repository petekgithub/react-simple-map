// reducers.js

import {
  FETCH_COVID_DATA_REQUEST,
  FETCH_COVID_DATA_SUCCESS,
  FETCH_COVID_DATA_FAILURE,
} from "../actions/actions";

const initialState = {
  covidData: {},
  loading: false,
  error: null,
};

const covidDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_COVID_DATA_SUCCESS:
      return {
        ...state,
        covidData: action.payload,
        loading: false,
      };
    case FETCH_COVID_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default covidDataReducer;
