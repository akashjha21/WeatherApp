import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Header = ({ city, navigation }: any) => {
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <FontAwesomeIcon icon={faArrowLeft} size={28} />
        </Pressable>
        <Text style={styles.text}>{city}</Text>
      </View>
      <Text style={{fontSize:20, fontWeight:'700', marginVertical:20, marginHorizontal:10, color:'purple'}}>This Week Temprature: </Text>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  text: {
    marginLeft: 16,
    color: "black",
    fontSize: 38,
    fontWeight: "bold",
  },
});
