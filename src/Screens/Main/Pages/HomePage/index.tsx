import React, { useState } from "react";
import { View, Text } from "react-native";
import {
    HomeContainer,
    DonationListContainer,
    SearchInput,
    FilterButton,
    GradientContainer,
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
        }
    ]);

    return (
        <HomeContainer>
            <DonationListContainer
                style={{ padding: 10 }}
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
