import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { myColors } from '../utils/myColors'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
{/*
    - Màn hình này sẽ đc dùng để load 2-3s rồi mới cho login hoặc signup
    - Là màn hình chờ.
*/}

const Splash = () => {
    const nav = useNavigation()
    useEffect(()=>{
       setTimeout(()=>{
            nav.replace("Signup")
       },3000)
    }, [])
  return (
    <View style={{
        backgroundColor: myColors.primary, 
        flex:1,
        justifyContent:'center'
    }}>
        {/*Thanh trạng thái trên cùng. vd giờ pin.*/}
        <StatusBar style='light'/>
        <View style={{
            flexDirection:"row",
            justifyContent:'center',
            alignItems:'center',
            gap:15
        }}>
            <Image 
                style={{tintColor:myColors.second}}
                source={require("../assets/mainicon.png")}/>
            <View style={{
            }}>
                <Text style={{
                    fontSize:75, 
                    color:myColors.second
                }}>Nectar</Text>
                <Text style={{
                    fontSize:17, 
                    letterSpacing:5, 
                    top:15, 
                    textAlign:'center', 
                    color:myColors.second
                }}>Online grocries</Text>
            </View>
        </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})
