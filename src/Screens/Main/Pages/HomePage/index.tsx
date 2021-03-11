import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../../../Components/Header/index';
import { AntDesign } from '@expo/vector-icons';

import { FilterButton, CategoryScroll } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import DonationListFC from '../../../../Components/Donation/index';

interface IFilterButton {
  text: string
}

const FilterButtonFC: React.FC<IFilterButton> = ({text}) => {
  return <FilterButton><Text style={{fontSize: 16}}>{text}</Text></FilterButton>
}

const HomePage = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{borderBottomColor: '#dadada', borderBottomWidth: 1}}>
        <CategoryScroll showsHorizontalScrollIndicator={false} horizontal={true}>
          <FilterButtonFC text="All"/>
          <FilterButtonFC text="Restaurantes"/>
          <FilterButtonFC text="Lanches"/>
          <FilterButtonFC text="Doces & Bolos"/>
          <FilterButtonFC text="Japonesa"/>
        </CategoryScroll>
      </View>
      <DonationListFC />
    </View>
  );
}

export default HomePage;