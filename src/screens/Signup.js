import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { myColors } from '../utils/MyColors'
import { StatusBar } from 'expo-status-bar'
import {Ionicons} from "@expo/vector-icons"
import { NavigationContainer, useNavigation } from '@react-navigation/native'
const Signup = () => {
  const nav = useNavigation()
  const [isShowPassword, setIsShowPassword] = useState(true)
  const handleLogin=()=>{
    nav.navigate("Login")
  }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:myColors.second}}>
      <StatusBar/>
      <ScrollView style={{flex:1, paddingTop:20}}>
        <Image
          style={{alignSelf:'center'}}
          source={require("../assets/mainicon.png")}
        />
        <View style={{marginTop:25, paddingHorizontal:20}}>
          <Text style={{color:myColors.third, fontSize:24, fontWeight:'bold'}}>Sign Up</Text>
          <Text style={{color:'grey', marginTop:15}}>Enter your credentials to continue</Text>

          <Text style={{
            color:"grey",
            fontSize:16,
            marginTop: 15,
            fontWeight:"400"
          }}>User name</Text>
          <TextInput
              maxLength={12}
              keyboardType='name-phone-pad'
              style={{borderBottomWidth:2, borderColor:"#E3E3E3"}}
          />

          <Text style={{
            color:"grey",
            fontSize:16,
            marginTop: 15,
            fontWeight:"400"
          }}>Email address</Text>
          <TextInput
              keyboardType='email-address'
              style={{borderBottomWidth:2, borderColor:"#E3E3E3"}}
          />

          <Text style={{  
            color:"grey",
            fontSize:16,
            marginTop: 15,
            fontWeight:"400"
          }}>Password</Text>
          <View style={{
              flex:1,
              borderBottomWidth:2,
              borderColor:"#E3E3E3",
              justifyContent:'space-between', 
              flexDirection:'row'}}>
          <TextInput
              secureTextEntry={isShowPassword}
              maxLength={12}
              keyboardType='ascii-capable'
              style={{
                flex:0.9,
              }}
          />
          <Ionicons 
            onPress={()=>{  setIsShowPassword(!isShowPassword) }}
            name={isShowPassword===true? "eye-off-outline" : "eye-outline"} 
            color='black' 
            size={24}
          />
          </View>

          <Text
            numberOfLines={2}
          style={{
              marginTop:15,
              fontSize:16,
              fontWeight:'400',
              color:myColors.third,
              lineHeight:25,
              letterSpacing:0.7,
              // width:"95%"
          }}
          >By continuing your agree to our Terms of Service and Privacy Policy </Text>

          <TouchableOpacity
            onPress={()=>{
              alert("ad")
            }}
          style={{
            backgroundColor:myColors.primary,
            alignItems:'center',
            justifyContent:'center',
            height:50,
            borderRadius:30,
            marginTop:10
          }}>
            <Text style={{
              fontSize:24,
              fontWeight:'500',
              color:myColors.second
            }}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{
            flex:1,
            flexDirection:"row",
            marginTop:10,
            justifyContent:'center',
            alignItems:'center',
            gap:10
          }}>
            <Text style={{fontSize:16}}>Alread have an account ?</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={{fontSize:16, color:myColors.primary, fontWeight:'800'}}>Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({})