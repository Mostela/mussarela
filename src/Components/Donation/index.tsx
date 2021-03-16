import React from 'react';
import { Image, ListRenderItem, Text, View } from 'react-native'
import { DonationContainer, WantButton } from './styles';
import { FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { IDonation } from '../../Models/components.interface';

const Donation: ListRenderItem<IDonation> = () => {
  return <DonationContainer>
    <Image style={{height: 116, flex: 1, marginBottom: 8}} source={require('./../../../assets/donation_image.png')} />
    <View style={{paddingHorizontal: 10}}>
      <Text style={{ fontSize: 16, color: '#000', textAlign: 'center', marginBottom: 32 }}>Cesta Básica</Text>
      <View style={{flexDirection: 'row', marginBottom: 15}}>
        <FontAwesome5 name="hand-holding-heart" size={20} color="black" />
        <Text style={{marginLeft: 5, color: '#000', fontSize: 13}}>Vitor Vasconcelos</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SimpleLineIcons name="location-pin" size={20} color="black" />
          <Text style={{marginLeft: 5, color: '#000', fontSize: 13}}>0.8 km</Text>
        </View>
        <WantButton onPress={() => console.log('Eu quero')}>
          <Text style={{color: '#fff', fontSize: 10}}>Eu quero</Text>
        </WantButton>
      </View>
    </View>
  </DonationContainer>;
}

export default Donation;