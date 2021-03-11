import React, { useState, useEffect } from "react";
import { Text, ListRenderItem, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  DonationList,
  DonationContainer,
  DonationImage,
  DonationInfo,
  DonationTitle,
  ProfilePicMiniature
} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IDonation {
  id: string;
  title: string;
  donator: string;
  distance: string;
  viewsCounter?: number | string;
  likesCounter?: number | string;
  image?: string;
}



const Donation: ListRenderItem<IDonation> = ({ item }) => {
  return (
    <DonationContainer>
      <DonationImage />
      <DonationInfo style={{justifyContent: 'space-between'}}>
        <DonationTitle>{item.title}</DonationTitle>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <ProfilePicMiniature/>
          <Text style={{fontSize: 8, fontWeight: 'bold', color: '#00000082', marginLeft: 5}}>{item.donator}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="location" size={15} color="black" />
            <Text style={{fontSize: 8, color: '#00000082', marginLeft: 5}}>{item.distance}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 25}}>
            <Ionicons name="eye" size={15} color="black" />
            <Text style={{fontSize: 8, color: '#00000082', marginLeft: 5}}>{item.viewsCounter} pessoa(s)</Text>
          </View>
        </View>
      </DonationInfo>
    </DonationContainer>
  );
};

const DonationListFC = () => {
  const [refresing, setRefresh] = useState<boolean>(false)



  const [DonationMock, setDonationMock] = useState<IDonation[]>([
    {
      id: "0825b9ed-13f3-4832-a039-b04102365c29",
      title: "Biscoito de povilho",
      donator: "Mariane Carvalho",
      distance: "1.9 km",
      image: 'https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png',
      viewsCounter: 5
    },
    {
      id: "330fca09-8845-4dd6-a03f-6251727fa477",
      title: "Biscoito de povilho2",
      donator: "Mariane Carvalho",
      distance: "1.9 km",
      image: 'https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png',
      viewsCounter: 5
    },
    {
      id: "d31f8a6b-8219-493d-b51b-aad69e80a8ec",
      title: "Biscoito de povilho3",
      donator: "Mariane Carvalho",
      distance: "1.9 km",
      image: 'https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png',
      viewsCounter: 5
    },
    {
      id: "de19f98c-4ab1-4dff-a814-e3a61fae357c",
      title: "Biscoito de povilho4",
      donator: "Mariane Carvalho",
      distance: "1.9 km",
      image: 'https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png',
      viewsCounter: 5
    },
    {
      id: "1c9d2bcc-d39d-4cb4-9af4-0153bd91021e",
      title: "Biscoito de povilho5",
      donator: "Mariane Carvalho",
      distance: "1.9 km",
      image: 'https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png',
      viewsCounter: 5
    },
    {
      id: "69d54324-21c5-4c82-993a-9ffb4d57eb91",
      title: "Biscoito de povilho6",
      donator: "Mariane Carvalho",
      distance: "1.9 km",
      image: 'https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png',
      viewsCounter: 5
    },
    {
      id: "de94f9fb-350c-4dd7-ac9c-82cd9c022c5a",
      title: "Biscoito de povilho7",
      donator: "Mariane Carvalho",
      distance: "1.9 km",
      image: 'https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png',
      viewsCounter: 5
    },
    {
      id: "c0614998-7934-456a-bf09-946149de9602",
      title: "Biscoito de povilho8",
      donator: "Mariane Carvalho",
      distance: "1.9 km",
      image: 'https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png',
      viewsCounter: 5
    },
  ])

  useEffect(() => {
    setRefresh(false);
  }, [DonationMock])

  function handleRefresh() {
    setRefresh(true);
    setTimeout(() => {
      setDonationMock([{
        id: '1',
        title: 'Nova Doacao',
        distance: '2.8',
        donator: 'Paulo Cesar',
        image: 'https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png',
        viewsCounter: 80
      }, ...DonationMock]);
    }, 3000);
  }

  return (
    <DonationList
      data={DonationMock}
      renderItem={Donation}
      keyExtractor={(item: any) => item.id}
      onRefresh={handleRefresh}
      refreshing={refresing}
      style={{ flex: 1, paddingHorizontal: 30, paddingVertical: 10 }}
    />
  );
};

export default DonationListFC;
