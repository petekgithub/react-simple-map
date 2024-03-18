const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;
const apiUrl = "https://covid-19-statistics.p.rapidapi.com/reports";

export const fetchData = async (countryCode) => {
  try {
    const response = await fetch(`${apiUrl}?iso=${countryCode}`, {
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
