import React from 'react';
import { Image, ListRenderItem, Text, View } from 'react-native'
import { DonationContainer, WantButton, ButtonGradient } from './styles';
import { FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { IDonation } from '../../Models/components.interface';

const Donation: ListRenderItem<IDonation> = ({item, index}) => {

  const {navigation} = item

  return <DonationContainer>
    <Image style={{height: 130, width: '100%', flex: 1, marginBottom: 8}} source={require('./../../../assets/DonationImage.png')} />
    <View style={{paddingHorizontal: 10}}>
      <Text style={{ fontSize: 16, color: '#000', textAlign: 'center', marginBottom: 32 }}>Cesta Básica</Text>
      <View style={{flexDirection: 'row', marginBottom: 15}}>
        <SimpleLineIcons name="user" size={14} color="black" />
        <Text style={{marginLeft: 5, color: '#000', fontSize: 13}}>Vitor Vasconcelos</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SimpleLineIcons name="location-pin" size={14} color="black" />
          <Text style={{marginLeft: 5, color: '#000', fontSize: 13}}>0.8 km</Text>
        </View>
        <ButtonGradient colors={['#302DCE', '#f700ff']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}>
          <WantButton onPress={() => navigation.push('Donation')}>
            <Text style={{color: '#fff', fontSize: 12, fontWeight: '700'}}>Eu quero</Text>
          </WantButton>
        </ButtonGradient>
      </View>
    </View>
  </DonationContainer>;
}

export default Donation;