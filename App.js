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
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Home'
          screenOptions={{headerShown:false}}
        >
          <Stack.Screen name='Splash' component={Splash}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Signup' component={Signup}/>
          <Stack.Screen name='DetailsItem' component={DetailsItem}/>
          <Stack.Screen name='Cart' component={Cart}/>
          <Stack.Screen name='Order' component={Order}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  
});
