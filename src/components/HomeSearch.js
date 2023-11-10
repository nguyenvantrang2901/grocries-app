import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { responsiveHeight } from 'react-native-responsive-dimensions'


const HomeSearch = () => {
  return (
    <View style={{
        backgroundColor:'#F2F3F2',
        height: responsiveHeight(6.5),
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        gap:20,
        paddingHorizontal:10
    }}>
    <Feather name="search" size={24} color="black" />
    <TextInput placeholder='Search Store' style={{flex:1}}/>
      
    </View>
  )
}

export default HomeSearch

const styles = StyleSheet.create({})