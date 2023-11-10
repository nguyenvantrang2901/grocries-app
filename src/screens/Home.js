import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { myColors } from '../utils/MyColors'
import { StatusBar } from 'expo-status-bar'
import HomeIcon from '../components/HomeIcon'
import HomeSearch from '../components/HomeSearch'
import HomeBanner from '../components/HomeBanner'
import ProductTitle from '../components/ProductTitle'
import ProductItem from '../components/ProductItem'

const Home = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:myColors.second}}>
        <StatusBar/>
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{flex:1, paddingTop:10, paddingHorizontal:20}}>
            <View style={{ paddingBottom:20, gap:10}}>
                <HomeIcon/>
                <HomeSearch/>
                <HomeBanner/>
                <ProductTitle title="Exclusive Offer"/>
                <ProductItem/>
                <ProductTitle title="Best Selling"/>
                <ProductItem/>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})