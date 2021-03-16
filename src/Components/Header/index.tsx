import React from 'react';
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { Platform, StatusBar} from 'react-native';

import { HeaderContainer, Logo } from './styles';

const Header = () => {  
  return <HeaderContainer style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
    <Logo source={require("./../../../assets/logo.png")}/>
    <Text style={{color: '#000', fontWeight: '700', fontSize: 26, }}>No Waste</Text>
    <Feather name="menu" size={25} color="black" />
  </HeaderContainer>;
}

export default Header;