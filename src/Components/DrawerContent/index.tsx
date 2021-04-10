import React from "react";
import { View, SafeAreaView, FlatList } from "react-native";

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
    DrawerNavigationOptionsText,
} from "./styles";
import {
    FontAwesome5,
    Ionicons,
} from "@expo/vector-icons";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { IDrawerOption } from "../../Models/components.interface";

const DrawerOption: React.FC<IDrawerOption> = ({
    children,
    label,
    name,
    navigation,
}) => {
    return (
        <DrawerNavigationOptionsContainer
            onPress={() => navigation.jumpTo(name)}>
            <DrawerNavigationOptions style={{borderBottomWidth: 1,borderBottomColor: "rgba(0, 0, 0, 0.25)",}}>
                {children}
                <DrawerNavigationOptionsText>{label}</DrawerNavigationOptionsText>
            </DrawerNavigationOptions>
        </DrawerNavigationOptionsContainer>
    );
};

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
    const Routes: IDrawerOption[] = [
        {
            id: '1',
            name: "Profile",
            label: "Perfil",
            children: <Ionicons name="person-outline" size={24} color="black" />,
            navigation,
        },
        {
            id: '2',
            name: "Profile",
            label: "Pontuação",
            children: <Ionicons name="ios-medal-outline" size={24} color="black" />,
            navigation,
        },
        {
            id: '3',
            name: "Profile",
            label: "Conquistas",
            children: <Ionicons name="trophy-outline" size={24} color="black" />,
            navigation,
        },
        {
            id: '4',
            name: "Profile",
            label: "Minha Lista",
            children: <Ionicons name="list-outline" size={24} color="black" />,
            navigation,
        },
        {
            id: '5',
            name: "Profile",
            label: "Localização",
            children: <Ionicons name="md-location-outline" size={24} color="black" />,
            navigation,
        },
        {
            id: '6',
            name: "Profile",
            label: "Confirmação",
            children: <Ionicons name="settings-outline" size={24} color="black" />,
            navigation,
        },
    ];

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
                                    <FontAwesome5
                                        name="trophy"
                                        size={20}
                                        color="black"
                                    />
                                    <AchievementsText>219</AchievementsText>
                                </AchievementsContainer>
                                <AchievementsContainer>
                                    <FontAwesome5
                                        name="medal"
                                        size={20}
                                        color="black"
                                    />
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
            <View style={{ width: "100%", borderTopWidth: 1 }}>
                <FlatList
                    data={Routes}
                    keyExtractor={(item: any) => item.id}
                    renderItem={ ({ item }) => <DrawerOption {...item}>{item.children}</DrawerOption> }
                />
            </View>
        </SafeAreaView>
    );
};

export default DrawerContent;
