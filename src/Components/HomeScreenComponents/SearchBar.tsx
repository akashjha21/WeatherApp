import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({tempCity, handleCityInput, setCity, fetchWeatherData,API_KEY}:any) => {
  return (
    
      <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter city"
            value={tempCity}
            onChangeText={handleCityInput}
            onSubmitEditing={() => {
              console.log("Submit khura");
              setCity(tempCity);
              fetchWeatherData(tempCity)
            }}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => (setCity(tempCity), fetchWeatherData(tempCity))}
          >
            <FontAwesomeIcon icon={faSearch} size={24} color='white'/>
          </TouchableOpacity>
        </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 9,
    padding: 12,
    width: "75%",
    color: "purple",
  },
  searchButton: {
    backgroundColor: "purple",
    borderRadius: 9,
    padding: 10,
    marginLeft: 10,
  },
})