export const fetchSevenDayForecast = async ({city,API_KEY, setForecastData}:any) => {
    console.log("City: " + city + "API_KEY: " + API_KEY);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );
      const data = await response.json();
      setForecastData(data.list);
    //   console.log(data.list);
    } catch (error) {
      console.error("Error fetching 7-day forecast data:", error);
    }
  };