export const fetchHourlyForecast = async ({city, setHourlyForecast, API_KEY}:any) => {
    try {
      if (city) {
        console.log("City khura:" + city+"wait");
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Error " + Error);
        }
        const data = await response.json();
        setHourlyForecast(data.list);
      }
    } catch (error) {
      console.error("Error fetching hourly forecast data:", error);
    }
  };