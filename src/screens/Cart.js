import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Feather } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { myColors } from '../utils/MyColors'

const Cart = () => {
    const [counter, setCounter] = useState(1)
  return (
    <SafeAreaView 
        style={{
            backgroundColor:'white',
            paddingHorizontal:10,
            flex:1,
            gap:15
    }}>
      <Text style={{fontSize:20, fontWeight:'600', textAlign:'center'}}>My Cart</Text>
      <View style={{
        height:responsiveHeight(20),
        // backgroundColor:'red',
        borderBottomColor:'#E3E3E3',
        borderBottomWidth:2,
        flexDirection:'row'
      }}>
        <View style={{flex:0.3}}>
            <Image 
                style={{height:100, width:100}}
                resizeMode='contain'
                source={{uri:"https://w7.pngwing.com/pngs/265/75/png-transparent-ipod-touch-apple-icon-format-icon-large-red-apples-closeup-of-red-apples-natural-foods-food-eating.png"}}
            />
        </View>
        <View style={{flex:0.7, paddingHorizontal:10, gap:15}}>
            <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between'}}>
                <Text style={{fontSize:18}}>Red Apple</Text>
                <Feather name="x" size={20} color="black" />
            </View>
            <View>
                <Text>1kg, pieces</Text>
            </View>

            <View style={{
                flexDirection:'row', 
                justifyContent:'space-between', 
                alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                    <Entypo onPress={()=>{
                        setCounter(counter-1)
                    }} name="minus" size={24} color="black" />
                    <Text
                        style={{
                            fontSize:18,
                            textAlign:'center',
                            borderColor:'grey',
                            borderWidth:1,
                            borderRadius:5,
                            height:30,
                            width:30,
                            textAlign:'center',
                            justifyContent:'center'
                        }}
                    >{counter}</Text>
                    <Entypo onPress={()=>{
                        setCounter(counter+1)
                    }} name="plus" size={24} color={myColors.primary} />
                </View>
                <Text style={{fontSize:20, fontWeight:'bold'}}>
                    ${`${(4.99*counter).toFixed(2)}`}
                </Text>
            </View>

        </View>
      </View>

      <View style={{flex:0.95, justifyContent:'flex-end'}}>
      <TouchableOpacity 
        activeOpacity={0.7}
        onPress={()=>{}}
        style={{
            backgroundColor:myColors.primary,
            borderRadius:10,
            height:responsiveHeight(10),
            alignItems:"center",
            justifyContent:'center'
            
        }}
      >
        <Text style={{
            textAlign:'center',
            fontSize:20,
            fontWeight:'bold',
            color:'white'
        }}>Check out</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({})
