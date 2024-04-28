import { StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/WeekForeCastComponents/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import TempData from '../Components/WeekForeCastComponents/TempData'

const WeekForcast = ({route, navigation}:any) => {
  const {city, API_KEY, setLoading} = route.params;
  return (
    <SafeAreaView style={{backgroundColor:'#CCCCFF', height:'100%'}}>
      <Header city={city} navigation={navigation} />
      <TempData city={city} API_KEY={API_KEY} />
    </SafeAreaView>
  )
}

export default WeekForcast

const styles = StyleSheet.create({

})