import React from "react";
import { View, SafeAreaView } from "react-native";

import {
    DrawerHeader,
    BackgroundBluredImage,
    ProfileVitals,
    ProfileImage,
    ProfileName,
    AchievementsContainer,
    AchievementsText,
    ProfileEmail,
    DrawerNavigationOptionsContainer,
    DrawerNavigationOptions,
    DrawerNavigationOptionsText
} from "./styles";
import { FontAwesome5, SimpleLineIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { DrawerContentComponentProps } from "@react-navigation/drawer";

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
    return (
        <SafeAreaView>
            <DrawerHeader>
                <BackgroundBluredImage
                    source={require("./../../../assets/profileImageMock.jpg")}
                    blurRadius={5}
                />
                <ProfileVitals>
                    <View style={{ flexDirection: "row", marginBottom: 18 }}>
                        <ProfileImage
                            source={require("./../../../assets/profileImageMock.jpg")}
                        />
                        <View>
                            <ProfileName>Paulo Cesar Alves</ProfileName>
                            <View style={{ flexDirection: "row" }}>
                                <AchievementsContainer>
                                    <FontAwesome5 name="trophy" size={20} color="black" />
                                    <AchievementsText>219</AchievementsText>
                                </AchievementsContainer>
                                <AchievementsContainer>
                                    <FontAwesome5 name="medal" size={20} color="black" />
                                    <AchievementsText>43</AchievementsText>
                                </AchievementsContainer>
                            </View>
                        </View>
                    </View>
                    <View>
                        <ProfileEmail>paulocesar1252@gmail.com</ProfileEmail>
                    </View>
                </ProfileVitals>
            </DrawerHeader>
            <View style={{width: '100%', borderTopWidth: 1}}>
                <DrawerNavigationOptionsContainer onPress={() => navigation.jumpTo('Profile')}>
                    <DrawerNavigationOptions style={{borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.25)'}}>
                        <SimpleLineIcons name="user" size={30} color="black" />
                        <DrawerNavigationOptionsText>Perfil</DrawerNavigationOptionsText>
                    </DrawerNavigationOptions>
                </DrawerNavigationOptionsContainer>
                <DrawerNavigationOptionsContainer onPress={() => navigation.jumpTo('Profile')}>
                    <DrawerNavigationOptions style={{borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.25)'}}>
                        <FontAwesome5 name="medal" size={30} color="black" />
                        <DrawerNavigationOptionsText>Pontuação</DrawerNavigationOptionsText>
                    </DrawerNavigationOptions>
                </DrawerNavigationOptionsContainer>
                <DrawerNavigationOptionsContainer onPress={() => navigation.jumpTo('Profile')}>
                    <DrawerNavigationOptions style={{borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.25)'}}>
                        <Ionicons name="trophy-outline" size={30} color="black" />
                        <DrawerNavigationOptionsText>Minha Lista</DrawerNavigationOptionsText>
                    </DrawerNavigationOptions>
                </DrawerNavigationOptionsContainer>
                <DrawerNavigationOptionsContainer onPress={() => navigation.jumpTo('Profile')}>
                    <DrawerNavigationOptions style={{borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.25)'}}>
                        <SimpleLineIcons name="location-pin" size={30} color="black" />
                        <DrawerNavigationOptionsText>Localização</DrawerNavigationOptionsText>
                    </DrawerNavigationOptions>
                </DrawerNavigationOptionsContainer>
                <DrawerNavigationOptionsContainer onPress={() => navigation.jumpTo('Profile')}>
                    <DrawerNavigationOptions style={{borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.25)'}}>
                        <FontAwesome name="gears" size={30} color="black" />
                        <DrawerNavigationOptionsText>Configurações</DrawerNavigationOptionsText>
                    </DrawerNavigationOptions>
                </DrawerNavigationOptionsContainer>
            </View>
        </SafeAreaView>
    );
};

export default DrawerContent;
