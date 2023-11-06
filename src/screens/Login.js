import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { myColors } from '../utils/MyColors'
import { StatusBar } from 'expo-status-bar'
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from "firebase/auth"
import { authentication } from '../../Firebaseconfig'

const Signup = () => {
  const nav = useNavigation()
  const [isShowPassword, setIsShowPassword] = useState(true)
  const [loginCrendetials, setLoginCrendetials] = useState({
    email:"",
    password: ""
  })
  const { email, password } = loginCrendetials;
  const handleLogin=()=>{
    signInWithEmailAndPassword(authentication, email, password)
    .then(()=>{
      nav.navigate("Home")
      // nav.replace("Home")
      // Alert.alert("Login Success")
    })
    .catch((error)=>{
      // Alert.alert(error.message)
      Alert.alert("Email or password is invalid !")
    })
  }

  const handleRegister=()=>{
    nav.navigate("Signup")
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
          <Text style={{
                  color:myColors.third, 
                  fontSize:24, 
                  fontWeight:'bold', 
                  textAlign:'center', 
                  justifyContent:'center'
                }}>Log In </Text>
          <Text style={{color:'grey', marginTop:15}}>Enter your email and password</Text>

          <Text style={{
            color:"grey",
            fontSize:16,
            marginTop: 15,
            fontWeight:"400"
          }}>Email address</Text>
          <TextInput
            value={email}
            onChangeText={(val)=>{
              setLoginCrendetials({...loginCrendetials, email: val})
            }}
            keyboardType="email-address"
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
              value={password}
              onChangeText={(val)=>{
                setLoginCrendetials({...loginCrendetials, password: val})
              }}
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
                textAlign:'right',
                color: "blue"
          }}
          >Forgot password</Text>

          <TouchableOpacity
            onPress={handleLogin}
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
            }}>Login Now</Text>
          </TouchableOpacity>

          <View style={{
            flex:1,
            flexDirection:"row",
            marginTop:10,
            justifyContent:'center',
            alignItems:'center',
            gap:10
          }}>
            <Text style={{fontSize:16}}>Don't have an account ?</Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text 
                style={{fontSize:16, color:myColors.primary, fontWeight:'800'}}
              >Register</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({})