import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HourlyForcast from '../../Helpers/HourlyForcast';

const HourCards = ({navigation, city, API_KEY}:any) => {
  return (
    <View style={{marginTop:16}}>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}>
            <Text style={{fontSize:16, fontWeight:'700', color:'black'}}>Today</Text>
            <Pressable
            onPress={() => {
              navigation.navigate("WeekForecast", {
                city: city,
                API_KEY: API_KEY,
              });
            }}
          >
            <Text style={{fontSize:16, fontWeight:'700', color:'black'}}>Next Week Temp. {'>'}</Text>
          </Pressable>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop:6
            }}
          >
            {city && <HourlyForcast city={city} API_KEY={API_KEY} />}
          </View>
        </View>
  )
}

export default HourCards

const styles = StyleSheet.create({})