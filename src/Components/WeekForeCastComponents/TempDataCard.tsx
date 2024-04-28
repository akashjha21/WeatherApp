import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const TempDataCard = ({ item }: any) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal:10,
        marginVertical:16,
      }}
    >
      
        <View
          style={{display:'flex', alignItems:'center', flexDirection:"row"}}
        >
          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${item.icon}.png`,
            }}
            style={styles.iconImage}
          />
          <Text style={styles.dayText}>{item.date}</Text>
        </View>

        <View
          style={{display:'flex', alignItems:'center', flexDirection:"row"}}
        >
          <Text style={{fontSize:20, color:'white', fontWeight:'600'}}>{item.maxTemp}{'/'}</Text>
          <Text style={styles.tempText}>{item.minTemp}</Text>
        </View>
    </View>
  );
};

export default TempDataCard;

const styles = StyleSheet.create({
  dayText: {
    fontSize: 18,
    marginBottom: 5,
  },
  iconImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  tempText: {
    fontSize: 14,
  },
});
