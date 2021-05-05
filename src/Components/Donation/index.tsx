import React, { useEffect } from 'react';
import { Image, ListRenderItem, Text, View } from 'react-native'
import { DonationContainer, WantButton, ButtonGradient, QuantityContainer } from './styles';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { IDonation } from '../../Models/components.interface';

const Donation: ListRenderItem<IDonation> = ({item, index}) => {
  console.log(item);

  const {navigation} = item

  return <DonationContainer>
    <Image style={{height: 130, width: '100%', flex: 1, marginBottom: 8, zIndex: 1}} source={require('./../../../assets/DonationImage.png')} />
    <QuantityContainer>
      <Feather name="box" size={18} color="black" />
      <Text style={{fontSize: 10, marginLeft: 6}}>5</Text>
    </QuantityContainer>
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