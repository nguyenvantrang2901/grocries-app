import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {MaterialIcons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import { myColors } from '../utils/MyColors'
const Order = () => {
    const nav = useNavigation()
    useEffect(()=>{
        setTimeout(() => {
            nav.navigate("Home")
        }, 2000);
    },[])
  return (
    <SafeAreaView style={{
        flex:1,
        justifyContent:'center',
        backgroundColor:"white",
        alignItems:'center'
    }}>
        <StatusBar/>
        <MaterialIcons name="verified" size={90} color={myColors.primary}/>
        <Text>Congrats, Your Order Places Successfully !!!</Text>
    </SafeAreaView>
  )
}

export default Order

const styles = StyleSheet.create({})