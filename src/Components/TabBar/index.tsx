import React, { useState } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import {
    TabBarContainer,
    AddDonationButton,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Modal, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CreateDonation from "../../Screens/Main/Pages/CreateDonation";

const TabBar: React.FC<BottomTabBarProps> = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    function navigateTo(route: string) {
        return navigation.navigate(route);
    }

    function CallModal() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                presentationStyle={"fullScreen"}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <CreateDonation />
            </Modal>
        );
    }

    return (
        <TabBarContainer
            style={{ borderTopWidth: 1, borderTopColor: "#88888833" }}
        >
            <Image source={require('./../../../assets/home.png')} style={{width: 40, height: 40}} />
            <Image source={require('./../../../assets/heart.png')} style={{width: 40, height: 40}} />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <AddDonationButton colors={['#302DCE', '#f700ff']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}>
                    <Ionicons name="add" size={25} color="white" />
                </AddDonationButton>
                <Modal
                    animationType="slide"
                    presentationStyle={"fullScreen"}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <CreateDonation />
                </Modal>
            </TouchableOpacity>
            <Image source={require('./../../../assets/forum.png')} style={{width: 40, height: 40}} />
            <Image source={require('./../../../assets/alert.png')} style={{width: 40, height: 40}} />
        </TabBarContainer>
    );
};

export default TabBar;
