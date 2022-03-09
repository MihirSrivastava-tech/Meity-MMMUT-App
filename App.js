import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Info from './screens/Info';
import Sensor from './screens/Sensor';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={Home} options={{animationEnabled:false}} />
        <Drawer.Screen name="Info" component={Info} options={{animationEnabled:false}}/>
        <Drawer.Screen name="Sensor" component={Sensor} options={{animationEnabled:false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  }
});