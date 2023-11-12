import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'
import { myColors } from '../utils/MyColors'
import DropBox from '../components/DropBox'

const DetailsItem = ({route}) => {
    //lấy dữ liệu từ component cha xuống
    const {name, price, pieces, img} = route.params.main
    
    const nav = useNavigation()
    const [counter, setCounter] = useState(1)
    const [isLiked, setIsLiked] = useState(false)
  return (
    <View 
        style={{flex:1, paddingTop:40, gap:8, backgroundColor:'white'}}
    >
        <StatusBar backgroundColor=''/>
        <Image 
            resizeMode='contain' 
            style={{
                height:200, 
                borderBottomLeftRadius:15, 
                borderBottomLeftRadius:15
            }} 
            source={{uri:img}}
        />
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            width:'100%',
            alignItems:'center',
            position:'absolute',
            // paddingHorizontal:10,
            paddingVertical:40
        }}>
            <Ionicons 
                onPress={()=>{nav.goBack() }} 
                name="chevron-back" 
                size={24} 
                color="black" 
            />
            <Feather name="share" size={24} color="black" />
        </View>
        

        <View style={{
                paddingHorizontal:10,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
            }}
        >
            <Text style={{fontSize:20, fontWeight:'700'}}>{name.charAt(0).toUpperCase()+name.slice(1)}</Text>
            <Ionicons 
                onPress={()=>{
                    setIsLiked(!isLiked)
                }} 
                name={!isLiked ? "heart-outline" : "heart"} size={24} 
                color={!isLiked ? "black" : "red"} 
            />
            
        </View>
        <Text 
            style={{paddingHorizontal:10,fontSize:18,color:'grey'}}
        >{pieces}, Price</Text>
        <View style={{paddingHorizontal:10,flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View style={{flexDirection:'row',gap:5}}>
                <Entypo onPress={()=>{
                    setCounter(counter-1)
                }} name="minus" size={24} color="black" />
                <TextInput
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
                >{counter}</TextInput>
                <Entypo onPress={()=>{
                    setCounter(counter+1)
                }} name="plus" size={24} color={myColors.primary} />
            </View>
            <Text style={{fontSize:20, fontWeight:'bold'}}>
                ${`${(price*counter).toFixed(2)}`}
            </Text>
        </View>
        <DropBox/>
        <View style={{
            flex:0.9,
            justifyContent:'flex-end'
        }}>
            <TouchableOpacity 
                activeOpacity={0.8}
                style={{
                    backgroundColor:myColors.primary,
                    borderRadius:10,
                    height:50,
                    justifyContent:'center',
                    alignItems:'center'
            }}>
                <Text style={{fontSize:18,color:'white', fontWeight:'bold'}}>Add to Basket</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default DetailsItem

const styles = StyleSheet.create({})