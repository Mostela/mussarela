import React, { useState } from "react";
import { View, Text } from "react-native";
import {
    HomeContainer,
    DonationListContainer,
    SearchInput,
    FilterButton,
    GradientContainer
} from "./styles";
import Donation from "../../../../Components/Donation/index";
import { IDonation } from "../../../../Models/components.interface";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomePage = () => {
    const [DonationMock, setDonationMock] = useState<IDonation[]>([
        {
            id: "0825b9ed-13f3-4832-a039-b04102365c29",
            title: "Biscoito de povilho",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
        },
        {
            id: "330fca09-8845-4dd6-a03f-6251727fa477",
            title: "Biscoito de povilho2",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
        },
        {
            id: "d31f8a6b-8219-493d-b51b-aad69e80a8ec",
            title: "Biscoito de povilho3",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
        },
        {
            id: "de19f98c-4ab1-4dff-a814-e3a61fae357c",
            title: "Biscoito de povilho4",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
        },
        {
            id: "1c9d2bcc-d39d-4cb4-9af4-0153bd91021e",
            title: "Biscoito de povilho5",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
        },
        {
            id: "69d54324-21c5-4c82-993a-9ffb4d57eb91",
            title: "Biscoito de povilho6",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
        },
        {
            id: "de94f9fb-350c-4dd7-ac9c-82cd9c022c5a",
            title: "Biscoito de povilho7",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
        },
        {
            id: "c0614998-7934-456a-bf09-946149de9602",
            title: "Biscoito de povilho8",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
        },
    ]);

    return (
        <HomeContainer>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 10,
                    paddingHorizontal: 10,
                }}
            >
                <SearchInput placeholder="Pesquisar" />
                <FilterButton
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,

                        elevation: 2,
                    }}
                >
                    {/* <GradientContainer colors={['#302DCE', '#703BC9']}>
                    </GradientContainer>; */}
                    <Text>Filtrar</Text>
                    <MaterialIcons name="tune" size={25} color="black" />
                </FilterButton>
            </View>
            <DonationListContainer
                style={{padding: 10}}
                data={DonationMock}
                renderItem={Donation}
                keyExtractor={(item: any) => item.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
            />
        </HomeContainer>
    );
};

export default HomePage;
