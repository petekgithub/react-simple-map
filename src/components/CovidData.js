import { useLoaderData, useNavigation } from "react-router-dom";
const loader = async ({ params }) => {
  try {
    const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;
    // const response = await fetch(
    //   `https://covid-19-statistics.p.rapidapi.com/provinces?iso=${params.countryCode}`,
    // 	{
    // 		method: "GET",
    // 		headers: {
    // 			"X-RapidAPI-Key": apiKey,
    // 			"X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
    // 		},
    // 	}
    // );

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

    // const response = await fetch(
    // 	"https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-04-07",
    // 	{
    // 		method: "GET",
    // 		headers: {
    // 			"X-RapidAPI-Key": apiKey,
    // 			"X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
    // 		},
    // 	}
    // );

    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // const data = await response.json();
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
  const navigation = useNavigation();

  // console.log("COVID DATA", covidData)
  console.log("COVID DATA", covidData.data[0]);
  // handle possible errors in the response
  // if (covidData.error || covidData.status !== 200) {
  // 	throw new Error(covidData.message);
  // }

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
          {/* {covidData.data.recovered || "N/A"} */}
          {covidData.data[0].recovered || "N/A"}
        </div>
        <div>
          {/* <span className='font-bold'>Deaths:</span> {covidData.data.deaths || "N/A"} */}
          <span className="font-bold">Deaths:</span>{" "}
          {covidData.data[0].deaths || "N/A"}
        </div>
        <div>
          <span className="font-bold">Confirmed:</span>{" "}
          {/* {covidData.data.confirmed || "N/A"} */}
          {covidData.data[0].confirmed || "N/A"}
        </div>
        <div>
          <span className="font-bold">Last checked:</span>
          &nbsp;
          {/* {new Date(covidData.data.lastChecked).toLocaleString() || "N/A"} */}
          {covidData.data[0].lastChecked
            ? new Date(covidData.data[0].lastChecked).toLocaleString()
            : "N/A"}
        </div>
        <div>
          <span className="font-bold">Last reported:</span>
          &nbsp;
          {/* {new Date(covidData.data.lastReported).toLocaleString() || "N/A"} */}
          {covidData.data[0].last_update
            ? new Date(covidData.data[0].last_update).toLocaleString()
            : "N/A"}
        </div>
        <div>
          <span className="font-bold">Location:</span>{" "}
          {/* {covidData.data.location.toUpperCase() || "N/A"} */}
          {covidData.data[0].region?.name
            ? `${covidData.data[0].region.province.toUpperCase()}, ${covidData.data[0].region.name.toUpperCase()}`
            : "N/A"}
        </div>
      </div>
    );
  }
};

export default CovidData;
export { loader };
