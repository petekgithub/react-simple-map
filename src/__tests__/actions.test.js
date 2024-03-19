import {
    fetchCovidDataRequest,
    fetchCovidDataSuccess,
    fetchCovidDataFailure,
  } from '../actions/actions'; // Adjust the path if needed
  
  // Test suite for actions
  describe('Actions', () => {
    // Test case for fetchCovidDataRequest
    test('fetchCovidDataRequest should create the correct action', () => {
      const countryCode = 'US';
      const expectedAction = {
        type: 'FETCH_COVID_DATA_REQUEST',
        payload: countryCode,
      };
      expect(fetchCovidDataRequest(countryCode)).toEqual(expectedAction);
    });
  
    // Test case for fetchCovidDataSuccess
    test('fetchCovidDataSuccess should create the correct action', () => {
      const data = { /* sample data */ };
      const expectedAction = {
        type: 'FETCH_COVID_DATA_SUCCESS',
        payload: data,
      };
      expect(fetchCovidDataSuccess(data)).toEqual(expectedAction);
    });
  
    // Test case for fetchCovidDataFailure
    test('fetchCovidDataFailure should create the correct action', () => {
      const error = 'Some error message';
      const expectedAction = {
        type: 'FETCH_COVID_DATA_FAILURE',
        payload: error,
      };
      expect(fetchCovidDataFailure(error)).toEqual(expectedAction);
    });
  });
  