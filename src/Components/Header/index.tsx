import React from 'react';
import { Text } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { Platform, StatusBar} from 'react-native';

import { HeaderContainer, Logo } from './styles';
import { DrawerNavigationProp } from '@react-navigation/drawer/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/core';

const Header = () => { 
  const navigation = useNavigation<DrawerNavigationProp<any>>() 
  return <HeaderContainer style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
    <Logo source={require("./../../../assets/logo.png")}/>
    <Text style={{color: '#000', fontWeight: '700', fontSize: 26, }}>No Waste</Text>
    <Feather name="menu" size={25} color="black" onPress={() => navigation.toggleDrawer()}/>
  </HeaderContainer>;
}

export default Header;