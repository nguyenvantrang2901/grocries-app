import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { myColors } from '../utils/MyColors'
import { StatusBar } from 'expo-status-bar'
import {Ionicons} from "@expo/vector-icons"
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { authentication, database } from "./../../Firebaseconfig"
import { setDoc, doc } from "firebase/firestore"
import uuid from "react-native-uuid"

const Signup = () => {
  const nav = useNavigation()
  const [isShowPassword, setIsShowPassword] = useState(true)
  const [userCrendetials, setUserCrendetials] = useState({
    name:"",
    email:"",
    password: ""
  })
  const { email, password, name } = userCrendetials;
  // console.log("name: ", name)
  const uid = uuid.v4()
  const handleSignUp=()=>{
  createUserWithEmailAndPassword(authentication, email, password)
  .then(() => {
    // Alert.alert('User account created & signed in!');
    nav.navigate("Login") 
    setDoc(doc(database, "users", uid),{
      username : name,
      email: email,
      id: authentication.currentUser.uid
    })
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    }

    console.log(error);
  });
  }

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
              value={name}
              onChangeText={(val)=>{
                setUserCrendetials({...userCrendetials, name:val})
              }}
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
            value={email}
            onChangeText={(val)=>{
              setUserCrendetials({...userCrendetials, email: val})
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
                setUserCrendetials({...userCrendetials, password: val})
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
              // width:"95%"
          }}
          >By continuing your agree to our Terms of Service and Privacy Policy </Text>

          <TouchableOpacity
            onPress={handleSignUp}
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