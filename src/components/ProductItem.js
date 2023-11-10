import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { fruits } from "../utils/Data"
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions"
import { AntDesign } from '@expo/vector-icons'
import { myColors } from '../utils/MyColors'

const ProductItem = () => {
  return (
    <View>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={fruits}
            renderItem={({item, index})=>(
                <View style={{
                    height: responsiveHeight(30),
                    width: responsiveWidth(42),
                    borderRadius: 15,
                    marginRight: 15,
                    borderColor: "red",
                    borderWidth: 2,
                }}>
                    <Image 
                        style={{height:80, resizeMode:'contain',width:120, alignSelf:'center'}} 
                        source={{uri: item.img}}/>
                    <View style={{paddingHorizontal:10, flex:1, gap:3}}>
                        <Text style={{fontSize:18, fontWeight:'700'}}>
                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                        </Text>

                        <View style={{flexDirection:'row', flex:1}}>
                            <Text style={{color:"grey"}}>{item.pieces} , Priceg</Text>
                            {/* <Text style={{color:"grey"}}>, Priceg</Text> */}
                        </View>

                        <View style={{
                                flexDirection:"row", 
                                justifyContent:'space-between',
                                alignItems:'center',
                                marginBottom:10
                        }}>
                            <Text style={{fontSize:16, fontWeight:"700"}}>${item.price}</Text>
                            <AntDesign name="pluscircle" size={30} color={myColors.primary} />
                        </View>
                    </View>
                </View>
            )}
        />
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({})