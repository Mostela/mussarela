import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login/index'
import Main from './Screens/Main/index';
import Register from './Screens/Register/index'

const Stack = createStackNavigator();

export default function Index() {
  return (
    <>
      <StatusBar translucent={true} style="dark"/>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
