import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCovidDataRequest } from "../actions/actions";
import "../index.css";

const CovidData = () => {
  const dispatch = useDispatch();
  const { countryCode } = useParams();
  const covidData = useSelector((state) => state.covidData);
  const navigate = useNavigate();

  const goBackToMap = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchCovidDataRequest(countryCode));
  }, [dispatch, countryCode]);

  if (!covidData || !covidData.data) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (covidData.loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  } else if (covidData.error) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error: {covidData.error}
      </div>
    );
  }

  if (covidData.data.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        Data not available.
      </div>
    );
  }

  const data = covidData.data[0];

  return (
    <div className="container">
      <div className="card recovered">
        <span className="text mr-3">Recovered: </span>{" "}
        {data.recovered !== null ? data.recovered : "Data not available"}
      </div>
      <div className="card deaths">
        <span className="text mr-3">Deaths:</span>{" "}
        {data.deaths !== null ? data.deaths : "Data not available"}
      </div>
      <div className="card confirmed">
        <span className="text mr-3">Confirmed: </span>{" "}
        {data.confirmed !== null ? data.confirmed : "Data not available"}
      </div>
      <div className="checked">
        <span className="text mr-3">Last checked:</span>{" "}
        {data.lastChecked
          ? new Date(data.lastChecked).toLocaleString()
          : "Data not available"}
      </div>
      <div className="reported">
        <span className="text mr-3">Last reported:</span>{" "}
        {data.last_update
          ? new Date(data.last_update).toLocaleString()
          : "Data not available"}
      </div>
      <div className="location">
        <span className="text mr-3">LOCATION:</span>{" "}
        {data.region
          ? `${
              data.region.province
                ? `${data.region.province.toUpperCase()}, `
                : ""
            }${data.region.name ? data.region.name.toUpperCase() : ""}`
          : "Data not available"}
      </div>
      <button className="btn-container" onClick={goBackToMap}>
        &larr;map
      </button>
    </div>
  );
};

export default CovidData;
