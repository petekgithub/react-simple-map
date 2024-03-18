// Action tipleri
export const FETCH_COVID_DATA_REQUEST = "FETCH_COVID_DATA_REQUEST";
export const FETCH_COVID_DATA_SUCCESS = "FETCH_COVID_DATA_SUCCESS";
export const FETCH_COVID_DATA_FAILURE = "FETCH_COVID_DATA_FAILURE";

// Action yaratıcı fonksiyonlar
export const fetchCovidDataRequest = (countryCode) => ({
  type: FETCH_COVID_DATA_REQUEST,
  payload: countryCode,
});

export const fetchCovidDataSuccess = (data) => ({
  type: FETCH_COVID_DATA_SUCCESS,
  payload: data,
});

export const fetchCovidDataFailure = (error) => ({
  type: FETCH_COVID_DATA_FAILURE,
  payload: error,
});
