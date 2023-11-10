import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'

const HomeIcon = () => {
  return (
    <SafeAreaView style={{justifyContent:'center', alignItems:'center'}}>
      <Image style={{width:30, height:35}} source={require("../assets/mainicon.png")}/>
    </SafeAreaView>
  )
}

export default HomeIcon

const styles = StyleSheet.create({})
