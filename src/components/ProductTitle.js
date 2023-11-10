import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { myColors } from '../utils/MyColors'

const ProductTitle = ({title}) => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <Text style={{fontSize:18, fontWeight:'700'}}>{title}</Text>
      <TouchableOpacity onPress={()=>{Alert.alert("See all hihi")}}>
        <Text style={{fontSize:16, color:myColors.primary}}>See all</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductTitle

const styles = StyleSheet.create({})