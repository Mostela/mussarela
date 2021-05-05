import React, { useState, useContext, useEffect } from "react";
import {
    HomeContainer,
    DonationListContainer,
} from "./styles";
import Donation from "../../../../Components/Donation/index";
import { IDonation } from "../../../../Models/components.interface";
import { StackScreenProps } from "@react-navigation/stack";
import DonationContext from '../../../../Contexts/Donation';

const HomePage = ({ navigation }: StackScreenProps<any>) => {
    const { donations, setDonations } = useContext(DonationContext)
    const [DonationMock, setDonationMock] = useState<IDonation[]>([
        {
            id: "0825b9ed-13f3-4832-a039-b04102365c29",
            title: "Biscoito de povilho",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
            navigation
        },
        {
            id: "0825b9ed-13f3-4832-a039-b04102365c28",
            title: "Biscoito de povilho",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
            navigation
        },
        {
            id: "0825b9ed-13f3-4832-a039-b04102365c27",
            title: "Biscoito de povilho",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
            navigation
        },
        {
            id: "0825b9ed-13f3-4832-a039-b04102365c26",
            title: "Biscoito de povilho",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
            navigation
        },
        {
            id: "0825b9ed-13f3-4832-a039-b04102365c25",
            title: "Biscoito de povilho",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
            navigation
        },
        {
            id: "330fca09-8845-4dd6-a03f-6251727fa477",
            title: "Biscoito de povilho2",
            author: "Mariane Carvalho",
            distance: "1.9 km",
            image:
                "https://s3.amazonaws.com/images-pertinho/STORE_LOGO_20200930124824084051.png",
            navigation
        }
    ]);
    
    useEffect(() => {
        setDonations(DonationMock)   
    }, [])



    return (
        <HomeContainer>
            <DonationListContainer
                style={{ padding: 10 }}
                data={donations}
                renderItem={Donation}
                keyExtractor={(item: any) => item.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
            />
        </HomeContainer>
    );
};

export default HomePage;
