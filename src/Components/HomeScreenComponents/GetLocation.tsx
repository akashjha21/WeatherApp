import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const GetLocation = ({getCurrentLocationWeather}:any) => {
  return (
    <TouchableOpacity
          style={styles.locationButton}
          onPress={getCurrentLocationWeather}
        >
          <FontAwesomeIcon icon={faLocation} size={24} color="white" />
        </TouchableOpacity>
  )
}

export default GetLocation

const styles = StyleSheet.create({
    locationButton: {
        zIndex:2,
        position: "absolute",
        bottom: 16,
        right: 16,
        backgroundColor: "purple",
        borderRadius: 50,
        padding: 15,
        elevation: 4,
      },
})