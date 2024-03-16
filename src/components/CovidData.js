import { useLoaderData, useNavigation } from "react-router-dom";
const loader = async ({ params }) => {
  try {
    const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;
    const response = await fetch(
      `https://covid-19-statistics.p.rapidapi.com/provinces?name=${params.countryName}`,
      {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching COVID-19 data:", error);
    throw new Error("Failed to fetch data");
  }
};

const CovidData = () => {
  const covidData = useLoaderData();
  const navigation = useNavigation();

  // handle possible errors in the response
  if (covidData.error || covidData.statusCode !== 200) {
    throw new Error(covidData.message);
  }

  if (navigation.state === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center gap-y-3 h-screen">
        <div>
          <span className="font-bold">Recovered:</span>{" "}
          {covidData.data.recovered || "N/A"}
        </div>
        <div>
          <span className="font-bold">Deaths:</span>{" "}
          {covidData.data.deaths || "N/A"}
        </div>
        <div>
          <span className="font-bold">Confirmed:</span>{" "}
          {covidData.data.confirmed || "N/A"}
        </div>
        <div>
          <span className="font-bold">Last checked:</span>
          &nbsp;
          {new Date(covidData.data.lastChecked).toLocaleString() || "N/A"}
        </div>
        <div>
          <span className="font-bold">Last reported:</span>
          &nbsp;
          {new Date(covidData.data.lastReported).toLocaleString() || "N/A"}
        </div>
        <div>
          <span className="font-bold">Location:</span>{" "}
          {covidData.data.location.toUpperCase() || "N/A"}
        </div>
      </div>
    );
  }
};

export default CovidData;
export { loader };
