import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import {myColors} from './src/utils/MyColors';
import Home from './src/screens/Home';
import DetailsItem from './src/screens/DetailsItem';
import Cart from './src/screens/Cart';
import { Provider } from 'react-redux';
import  {Store}  from './Redux/Store';
import Order from './src/screens/Order';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"

const Stack = createNativeStackNavigator()

//Screen name
const homePage = "Home"
const detailsItemPage = "DetailsItem"
const cartPage = "Cart"
const orderPage = "Order"

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName='Home'
          screenOptions={({route})=>({
            headerShown:false,
            tabBarIcon:({focused, color, size})=>{
              let iconName;
              let routerName = route.name
              if(routerName===homePage){
                iconName = focused ? "home":'home-outline'
              }else if(routerName===detailsItemPage){
                iconName = focused? 'list':"list-outline"
              }else if(routerName===cartPage){
                iconName = focused ? "cart":"cart-outline"
              }else if(routerName===orderPage){
                iconName = focused ? "mail":"mail-outline" 
              }
              return <Ionicons name={iconName} size={size} color={color}/>
            }
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
          }}
        >
          <Tab.Screen 
            name='Splash' 
            component={Splash} 
            options={()=>({
              tabBarStyle:{
                display:"none"
              },
              tabBarButton:()=>null
            })}
          />
          <Tab.Screen name='Home' component={Home}/>
          <Tab.Screen 
            name='Login' 
            component={Login} 
            options={()=>({
              tabBarStyle:{
                display:"none"
              },
              tabBarButton:()=>null
            })}
          />
          <Tab.Screen 
            name='Signup' 
            component={Signup}
            options={()=>({
              tabBarStyle:{
                display:"none"
              },
              tabBarButton:()=>null
            })}
          />
          <Tab.Screen name='DetailsItem' component={DetailsItem}/>
          <Tab.Screen name='Cart' component={Cart}/>
          <Tab.Screen name='Order' component={Order}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  
});
