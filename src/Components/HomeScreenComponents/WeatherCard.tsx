import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import CardDescription from "./CardDescription";

const WeatherCard = ({ weatherData, loading, getCurrentDateTime }: any) => {
  return (
    <View style={styles.card}>
      {loading ? (
        <ActivityIndicator size="large" color="purple" />
      ) : weatherData ? (
        <ScrollView contentContainerStyle={styles.weatherContainer}>
          <Text style={styles.locationText}>
            {weatherData && weatherData.sys
              ? `${weatherData.name}, ${weatherData.sys.country}`
              : "Unknown Location"}
          </Text>
          <Text style={styles.temperatureText}>
            {weatherData && weatherData.main
              ? `${weatherData.main.temp}°C`
              : "Unknown Temperature"}
          </Text>
          <Text style={styles.dateTimeText}>{getCurrentDateTime()}</Text>
          <Image
            source={{
              uri:
                weatherData &&
                weatherData.weather &&
                weatherData.weather.length > 0 &&
                weatherData.weather[0].icon
                  ? `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
                  : "./assets/Images/Null.png",
            }}
            style={styles.weatherIcon}
          />
          <Text style={styles.weatherDescription}>
            {weatherData &&
            weatherData.weather &&
            weatherData.weather.length > 0
              ? weatherData.weather[0].description
              : "Unknown Weather Description"}
          </Text>
          <CardDescription weatherData={weatherData} />

          
        </ScrollView>
      ) : (
        <Text style={styles.errorText}>
          No data found. Please enter a valid city name.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F2E6FF",
    borderRadius: 10,
    // padding: 20,
    elevation: 4,
    width: "90%",
  },
  weatherContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  locationText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "purple",
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 10,
    color: "purple",
  },
  dateTimeText: {
    fontSize: 13,
    marginTop: 5,
    color: "purple",
  },
  weatherIcon: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  weatherDescription: {
    fontSize: 18,
    marginTop: 4,
    color: "purple",
  },
  additionalInfo: {
    fontSize: 16,
    marginTop: 8,
    color: "purple",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

export default WeatherCard;
