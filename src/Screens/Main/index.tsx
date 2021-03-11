import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabBarContainer } from './styles'
import { Entypo, MaterialCommunityIcons, FontAwesome5, Ionicons  } from '@expo/vector-icons'; 
import HomePage from './Pages/HomePage/index';

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

const TabBar: React.FC<BottomTabBarProps> = ({ navigation }) => {
  function navigateTo(route: string) {
    return navigation.navigate(route);
  }

  return (
    <TabBarContainer>
      <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="black" onPress={() => navigateTo('Home')}/>
      <FontAwesome5 name="heart" size={24} color="black" onPress={() => navigateTo('Volunteer')} />
      <Ionicons name="chatbubbles-outline" size={24} color="black"onPress={() => navigateTo('Forum')}  />
      <FontAwesome5 name="envelope-open" size={24} color="black" onPress={() => navigateTo('Messages')} />
    </TabBarContainer>
  )
}

const Main = () => {
  return (
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
  );
}

export default Main;