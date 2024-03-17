import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "../common-styles.css";

const loader = async ({ params }) => {
  try {
    const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;
    const response = await fetch(
      `https://covid-19-statistics.p.rapidapi.com/reports?iso=${params.countryCode}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
        },
      }
    );

    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    let data = await response.text();
    data = JSON.parse(data);
    console.log("DATA", data);
    return data;
  } catch (error) {
    console.error("Error fetching COVID-19 data:", error);
    throw new Error("Failed to fetch data");
  }
};

const CovidData = () => {
  const covidData = useLoaderData();
  const navigate = useNavigate();

  const goBackToMap = () => {
    navigate("/");
  };

  if (covidData.state === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  } else {
    const data = covidData.data[0];

    if (!data || Object.keys(data).length === 0) {
      return (
        <div className="flex items-center justify-center h-screen">
          Data not available.
        </div>
      );
    }

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
        <button onClick={goBackToMap}>&larr;MAP</button>
      </div>
    );
  }
};

export default CovidData;
export { loader };
