import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import TempDataCard from "./TempDataCard";
import { fetchSevenDayForecast } from "../../Functions/sevenDayForecast";

const TempData: React.FC<{ city: string; API_KEY: string }> = ({
  city,
  API_KEY,
}) => {
  const [forecastData, setForecastData] = useState<any[]>([]);

  useEffect(() => {
    fetchSevenDayForecast({ city, API_KEY, setForecastData });
  }, []);

  const extractForecastData = () => {
    const forecastItems: {
      date: string;
      icon: string;
      minTemp: string;
      maxTemp: string;
    }[] = [];
    forecastData.forEach((item) => {
      // Extracting temperature at noon (12:00 PM)
      if (item.dt_txt.includes("12:00:00")) {
        const date = new Date(item.dt * 1000).toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
        });
        console.log(item.main.temp_min + " " + item.main.temp_max);
        const icon = item.weather[0].icon;
        const minTemp = `${Math.round(item.main.temp_min - 273.15)}°C`;
        const maxTemp = `${Math.round(item.main.temp_max - 271.15)}°C`;
        forecastItems.push({ date, icon, minTemp, maxTemp });
      }
    });
    return forecastItems;
  };

  const forecastItems = extractForecastData();

  const renderForecastItem = ({
    item,
  }: {
    item: { date: string; icon: string; minTemp: string; maxTemp: string };
  }) => <TempDataCard item={item} />;

  if (forecastItems && forecastItems.length === 0) {
    return (
      <View style={{height:"30%", alignItems:'center', justifyContent:"center"}}>
        <ActivityIndicator size="large" color="purple" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={forecastItems}
        keyExtractor={(item, index) => `${item.date}-${index}`}
        renderItem={renderForecastItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  forecastList: {
    flexGrow: 1,
  },
});

export default TempData;
