import React, { useState, useEffect } from "react";
import {
  Text,
  FlatList,
  StyleSheet,
  Image, Pressable
} from "react-native";
import { fetchHourlyForecast } from "../Functions/hourlyForecast";

const HourlyForcast: React.FC<{ city: string; API_KEY: string }> = ({
  city,
  API_KEY,
}) => {
  const [hourlyForecast, setHourlyForecast] = useState<any[]>([]);
  const [pressedIndex, setPressedIndex] = useState<number | null>(0);

  useEffect(() => {
    fetchHourlyForecast({city,setHourlyForecast, API_KEY});
  }, [city]);

  const handlePress = (index: number) => {
    setPressedIndex(index);
  };

  const renderHourlyItem = ({ item, index }: { item: any; index: number }) => {
    const time = new Date(item.dt * 1000).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    const iconUrl = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
    const temperature = `${Math.round(item.main.temp - 273.15)}°C`;

    return (
      <Pressable
        style={[
          styles.hourlyItem,
          { backgroundColor: index === pressedIndex ? "#CF9FFF" : "#E5E4E2" },
        ]}
        onPress={() => handlePress(index)}
      >
        <Text style={styles.timeText}>{time}</Text>
        <Image source={{ uri: iconUrl }} style={styles.iconImage} />
        <Text style={styles.temperatureText}>{temperature}</Text>
      </Pressable>
    );
  };
  

  return (
    <FlatList
      data={hourlyForecast.slice(0, 8)} // Only the first 8 items
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item,index) => item.dt.toString()}
      renderItem={renderHourlyItem}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft:5,
  },
  hourlyItem: {
    alignItems: "center",
    marginHorizontal: 10,
    marginTop:16,
    width:75,
    height:110,
    backgroundColor:"#CF9FFF",
    borderRadius:10,
    justifyContent:'space-evenly'
  },
  timeText: {
    fontSize: 14,
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  temperatureText: {
    fontSize: 16,
    fontWeight:'700',
    // color:'white',
  },
});

export default HourlyForcast;
