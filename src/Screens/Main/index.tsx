import * as React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabBar from './../../Components/TabBar/index'
import DrawerContent from './../../Components/DrawerContent/index'
import HomePage from './Pages/HomePage/index';
import CreateDonation from './Pages/CreateDonation/index'
import Header from '../../Components/Header';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function VolunteerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Volunteer!</Text>
    </View>
  );
}
function ForumScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Forum!</Text>
    </View>
  );
}
function MessagesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages!</Text>
    </View>
  );
}
const ProfileScreen = () => {
  return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Profile Screen</Text>
  </View>
}

const Main = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="Home"
        drawerPosition="right"
        drawerContent={DrawerContent}>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </>
  );
}


const TabNavigator = () => {
  return (
    <>
      <Header />
      <Tab.Navigator
        tabBar={props => {
          return (
            <TabBar {...props} />
          );
        }}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Volunteer" component={VolunteerScreen} />
        <Tab.Screen name="Forum" component={ForumScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
      </Tab.Navigator>
    </>
  )
}

export default Main;