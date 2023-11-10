import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'

const HomeBanner = () => {
  return (
    <View style={{}}>
        <Image 
            style={{
                height:responsiveHeight(20)
            }} 
            source={require("../assets/banner.png")}
        />
    </View>
  )
}

export default HomeBanner

const styles = StyleSheet.create({})