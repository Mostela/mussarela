import React, {useState} from "react";
import {
  Container,
  ContentContainer,
  SectionTitle,
  DonatorImage,
  DonatorName,
  BasicInfo,
  AccountInfoContainer,
  AccountInfoTitle,
  AccountInfoText,
  IconContainer,
  Icon,
  HorizontalView
} from "./styles";
import PageHeader from "../../../../Components/PageHeader/index";
import { View, ImageSourcePropType } from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import HeartIcon from './../../../../../assets/heart.png'
import { StackScreenProps } from "@react-navigation/stack";
import DonationProducts from "./../../../../Components/DonationProduct/index";

interface IProduct {
    id: string;
    title: string;
    description: string;
    quantity: string;
    image: ImageSourcePropType;
}

const DonationOpened = ({ navigation }: StackScreenProps<any>) => {

    const [products, setProduct] = useState<IProduct[]>([
      {
        id: '1',
        title: 'Livros e Camisetas',
        description: 'Livro da clarice linspector super atual e conceituado',
        quantity: '2',
        image: require('./../../../../../assets/DonationImage.png')
      },
      {
        id: '2',
        title: 'Livros e Camisetas',
        description: 'Livro da clarice linspector super atual e conceituado',
        quantity: '2',
        image: require('./../../../../../assets/DonationImage.png')
      }
    ])

    return (
        <Container>
            <PageHeader title={"Livros e Camisetas"} shareable={true} goBack={() => navigation.goBack()} />
            <ContentContainer>
                <View style={{marginBottom: 20}}>
                    <SectionTitle style={{marginBottom: 20}}>Doador</SectionTitle>
                    <HorizontalView>
                        <DonatorImage source={require('./../../../../../assets/profileImageMock.jpg')} />
                        <View>
                            <BasicInfo>
                                <SimpleLineIcons name="user" size={20} color="black" />
                                <DonatorName>Paulo Cesar</DonatorName>
                            </BasicInfo>
                            <HorizontalView>
                                <AccountInfoContainer>
                                    <AccountInfoTitle>Doações Realizadas</AccountInfoTitle>
                                    <HorizontalView style={{alignItems: "center"}}>
                                        <IconContainer><Icon source={HeartIcon} style={{resizeMode: "contain"}}/></IconContainer>
                                        <AccountInfoText>1.999.999</AccountInfoText>
                                    </HorizontalView>
                                </AccountInfoContainer>
                                <AccountInfoContainer>
                                    <AccountInfoTitle>Nível</AccountInfoTitle>
                                    <HorizontalView style={{alignItems: "center"}}>
                                        <MaterialCommunityIcons name="medal-outline" size={20} color="black" />
                                        <AccountInfoText>219</AccountInfoText>
                                    </HorizontalView>
                                </AccountInfoContainer>
                                <AccountInfoContainer>
                                    <AccountInfoTitle>Conquistas</AccountInfoTitle>
                                    <HorizontalView style={{alignItems: "center"}}>
                                        <AntDesign name="Trophy" size={20} color="black" />
                                        <AccountInfoText>432</AccountInfoText>
                                    </HorizontalView>
                                </AccountInfoContainer>
                            </HorizontalView>
                        </View>
                    </HorizontalView>
                </View>
                <View style={{marginBottom: 20}}>
                    <SectionTitle>Produtos</SectionTitle>
                    {products.map(product => {                        
                        return <DonationProducts key={product.id} {...product} />
                    })}
                </View>
                <View style={{marginBottom: 20}}>
                    <SectionTitle>Endereço</SectionTitle>
                </View>
            </ContentContainer>
        </Container>
    );
};

export default DonationOpened;
