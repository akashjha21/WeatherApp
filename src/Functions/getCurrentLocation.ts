import { WeatherData } from "../../WeatherData";

import * as Location from "expo-location";

interface Type {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setWeatherData : React.Dispatch<React.SetStateAction<WeatherData | null>>,
    setCity: React.Dispatch<React.SetStateAction<string>>,
    API_KEY : string,
}

export const getCurrentLocationWeather = async ({setLoading, setWeatherData, setCity, API_KEY}:Type) => {
    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        console.log("Error getting weather data");
        return;
      }
      const data: WeatherData = await response.json();
      setWeatherData(data);
      console.log(data);
      setCity(data.name);
      // console.log("data.name " + data.name)

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };