import { StyleSheet } from "react-native";
import React from "react";
import HomeScreen from "./src/Screens/HomeScreen";
import WeekForcast from "./src/Screens/WeekForcast";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const Stack = createNativeStackNavigator();
  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="WeekForecast" component={WeekForcast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

function createStackNavigator() {
  throw new Error("Function not implemented.");
}
