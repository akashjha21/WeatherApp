import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../Components/HomeScreenComponents/SearchBar";
import WeatherCard from "../Components/HomeScreenComponents/WeatherCard";
import GetLocation from "../Components/HomeScreenComponents/GetLocation";
import HourCards from "../Components/HomeScreenComponents/HourCards";
import { WeatherData } from "../../WeatherData";
import { getCurrentLocationWeather } from "../Functions/getCurrentLocation";
import { getCurrentDateTime } from "../Functions/getCurrentDate";

const HomeScreen: React.FC = ({ navigation }: any) => {
  const [city, setCity] = useState<string>("");
  const [tempCity, setTempCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const API_KEY = "a4feb2321f27673f6f5e1984b8f5eeeb";

  useEffect(() => {
    getCurrentLocationWeather({ setLoading, setWeatherData, setCity, API_KEY });
  }, []);

  const fetchWeatherData = async (chere: string) => {
    setLoading(true);
    if (!chere) chere = city;
    try {
      console.log("Oikhan theke: " + chere);
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${chere}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        console.log("Error getting weather data");
        return;
      }
      const data: WeatherData = await response.json();
      setWeatherData(data);
      setLoading(false);
      setTempCity("");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };


  const handleCityInput = (text: string) => {
    setTempCity(text);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "800",
            color: "purple",
            marginBottom: 20,
          }}
        >
          WeatherApp
        </Text>

        <SearchBar
          tempCity={tempCity}
          handleCityInput={handleCityInput}
          setCity={setCity}
          fetchWeatherData={fetchWeatherData}
        />

        <WeatherCard
          weatherData={weatherData}
          loading={loading}
          getCurrentDateTime={getCurrentDateTime}
        />

        <GetLocation
          getCurrentLocationWeather={() =>
            getCurrentLocationWeather({
              setLoading,
              setWeatherData,
              setCity,
              API_KEY,
            })
          }
        />

        <StatusBar backgroundColor="#CCCCFF" />

        {/* Hourly ForeCast */}

        <HourCards navigation={navigation} city={city} API_KEY={API_KEY} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#CCCCFF",
    marginTop: "4%",
  },
});

export default HomeScreen;
