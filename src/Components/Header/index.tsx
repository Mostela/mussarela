import React from "react";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Platform, StatusBar } from "react-native";

import {
    HeaderContainer,
    Logo,
    Container,
    SearchBarContainer,
    SearchBar,
    FilterButton,
} from "./styles";
import { DrawerNavigationProp } from "@react-navigation/drawer/lib/typescript/src/types";
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
    const navigation = useNavigation<DrawerNavigationProp<any>>();
    return (
        <Container
            style={{
                paddingTop: 50,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 9,
                },
                shadowOpacity: 0.41,
                shadowRadius: 10.11,
                elevation: 18,
            }}
        >
            <HeaderContainer>
                <Logo source={require("./../../../assets/logo.png")} />
                <Feather
                    name="menu"
                    size={25}
                    color="black"
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderContainer>
            <SearchBarContainer>
                <SearchBar placeholder="Pesquisar" />
                <FilterButton>
                    <Text style={{color: '#6100FF', fontWeight: '600'}}>FILTRO</Text>
                    <MaterialIcons name="tune" size={24} color="black" />
                </FilterButton>
            </SearchBarContainer>
        </Container>
    );
};

export default Header;
