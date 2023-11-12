import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { Dropdown } from '../utils/Data'
import { AntDesign } from '@expo/vector-icons'

const DropBox = () => {
    const [isContent, setIsContent] = useState()
    const [toggle, setToggle] = useState(false)
  return (
    <View style={{ paddingHorizontal:10}}>
        
        <FlatList
            data={Dropdown}
            renderItem={({item, index})=>(
                <View>
                    <TouchableOpacity 
                        onPress={()=>{
                            setIsContent(index)
                            setToggle(!toggle)
                        }}
                        style={{
                            flex:1,
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-between',
                            borderBottomColor:"#E3E3E3",
                            borderBottomWidth:2,
                            // marginBottom: 15,
                            paddingVertical:10
                        }}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{item.title}</Text>
                    <AntDesign 
                        name={isContent === index && toggle ? "down" : "right"} 
                        size={24} 
                        color="black" 
                    />
                    </TouchableOpacity>
                    {
                        isContent === index && toggle ?
                            <Text style={{color:'grey'}}>{item.content}</Text>
                            : null
                    }
                </View>
            )}
        />
    </View>
  )
}

export default DropBox

const styles = StyleSheet.create({})