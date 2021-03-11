import React from 'react';
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Platform, StatusBar} from 'react-native';

import { HeaderContainer } from './styles';

const Header = () => {
  function headerHeight(): number {
    if (StatusBar.currentHeight) {
      return Platform.OS === 'android' ? StatusBar.currentHeight + 60 : 60
    } else {
      return 60;
    }
  }
  
  return <HeaderContainer style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, height: headerHeight() }}>
    <Text style={{color: '#fff', fontWeight: '600', fontSize: 20}}>Logo</Text>
    <AntDesign name="warning" size={24} color="white" />
  </HeaderContainer>;
}

export default Header;