import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const CardDescription = ({ weatherData }: any) => {
  return (
    <View style={{ marginTop: 16 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          width: "115%",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            height: 80,
            width: "50%",
          }}
        >
          <Feather name="droplet" size={30} color="black" />

          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={styles.additionalInfo}>
              {weatherData && weatherData.main ? "Humidity: " : ""}
            </Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
                {weatherData && weatherData.main
                  ? `${weatherData.main.humidity}%`
                  : "Unknown Humidity"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            borderLeftWidth:1,
            height: 80,
            width: "50%",
          }}
        >
          <Feather name="wind" size={30} color="black" />

          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={styles.additionalInfo}>
              {weatherData && weatherData.main ? "Wind Speed: " : ""}
            </Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{fontSize: 20, fontWeight: "700", color: "black" }}>
            {weatherData && weatherData.wind
              ? `${weatherData.wind.speed} m/s`
              : "Unknown Wind Speed"}
          </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "115%",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            height: 80,
            width: "50%",
          }}
        >
          <Fontisto name="heartbeat-alt" size={30} color="black" />

          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={styles.additionalInfo}>
              {weatherData && weatherData.main ? "Pressure: " : ""}
            </Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{fontSize: 20, fontWeight: "700", color: "black" }}>
            {weatherData && weatherData.main
              ? `${weatherData.main.pressure} hPa`
              : "Unknown Pressure"}
          </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            borderLeftWidth:1,
            flexDirection: "row",
            height: 80,
            width: "50%",
          }}
        >
          <FontAwesome name="thermometer-4" size={30} color="black" />

          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={styles.additionalInfo}>
              {weatherData && weatherData.main ? "Feels Like: " : ""}
            </Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{fontSize: 20, fontWeight: "700", color: "black" }}>
            {weatherData && weatherData.main
              ? `${weatherData.main.feels_like} °C`
              : "Unknown Temprature"}
          </Text> 
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardDescription;

const styles = StyleSheet.create({
  additionalInfo: {
    fontSize: 16,
    marginTop: 8,
    fontWeight:'600',
    color: "purple",
  },
});

