import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { myColors } from '../utils/MyColors'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:myColors.second}}>
        <StatusBar/>
        <ScrollView style={{flex:1, paddingTop:20}}>
            <View style={{marginTop:25, paddingHorizontal:20}}>
                <Text>Home Page</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})