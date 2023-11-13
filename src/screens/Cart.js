import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Feather } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { myColors } from '../utils/MyColors'
import { useDispatch, useSelector } from 'react-redux'
import {removeToCart, decreQuantity, increQuantity} from "../../Redux/CartSlice"
import { useNavigation } from '@react-navigation/native'
const Cart = () => {
    const dispacth = useDispatch()
    const storeData = useSelector((state)=>state.cartSlice)
    // console.log(storeData)
    let total = 0
    storeData.forEach(element=>{
        total+= element.price*element.quantity
    })
    const nav = useNavigation()
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
            flex:4
        }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={storeData}
        renderItem={({item, index})=>(
            <View 
                style={{
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
                        source={{uri:item.img}}
                    />
                </View>
                <View style={{flex:0.7, paddingHorizontal:10, gap:15}}>
                    <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontSize:18}}>
                            {item.name.charAt(0).toUpperCase()+item.name.slice(1)}
                        </Text>
                        <Feather 
                            onPress={()=>{
                                dispacth(removeToCart(item))
                            }} 
                            name="x" 
                            size={20} 
                            color="black" />
                    </View>
                    <View>
                        <Text>{item.pieces}kg, pieces</Text>
                    </View>

                    <View style={{
                        flexDirection:'row', 
                        justifyContent:'space-between', 
                        alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Entypo onPress={()=>{
                                dispacth(decreQuantity(item))
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
                            >{item.quantity}</Text>
                            <Entypo onPress={()=>{
                                dispacth(increQuantity(item))
                            }} name="plus" size={24} color={myColors.primary} />
                        </View>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>
                            ${`${(item.quantity*item.price).toFixed(2)}`}
                        </Text>
                    </View>

                </View>
            </View>
        )}
      />
      </View>
      
    
      <View style={{flex:0.9, justifyContent:'flex-end', paddingBottom:10}}>

        <View style={{
            flexDirection:'row', 
            justifyContent:'space-between',
            paddingHorizontal:10,
            paddingVertical:5
        }}>
            <Text style={{fontSize:18, fontWeight:"700"}}>Total</Text>
            <Text style={{fontSize:18, fontWeight:"700"}}>${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={()=>{
                nav.navigate("Order")
            }}
            style={{
                backgroundColor:myColors.primary,
                borderRadius:15,
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
