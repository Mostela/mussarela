import React, { useState } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { TabBarContainer, AddDonationButton } from './styles';
import { MaterialCommunityIcons, FontAwesome5, Ionicons  } from '@expo/vector-icons'; 
import { View, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CreateDonation from "../../Screens/Main/Pages/CreateDonation";

const TabBar: React.FC<BottomTabBarProps> = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);

    function navigateTo(route: string) {
        return navigation.navigate(route);
    }

    function CallModal() {
        console.log(modalVisible, 'Ola');
        
        return (
            <Modal 
                animationType="slide"
                transparent={true}
                presentationStyle={'fullScreen'}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <CreateDonation />
            </Modal>
        )
    }

    return (
        <TabBarContainer
            style={{ borderTopWidth: 1, borderTopColor: "#88888833" }}>
            <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={24}
                color="black"
                onPress={() => navigateTo("Home")}
            />
            <FontAwesome5
                name="heart"
                size={24}
                color="black"
                onPress={() => navigateTo("Volunteer")}
            />
            <TouchableOpacity  onPress={() => setModalVisible(true)}>
                <AddDonationButton colors={['#302DCE', '#703BC9']}>
                    <Ionicons name="add" size={25} color="white" />
                </AddDonationButton>
                <Modal 
                    animationType="slide"
                    presentationStyle={'fullScreen'}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <CreateDonation />
                </Modal>
            </TouchableOpacity>
            <Ionicons
                name="chatbubbles-outline"
                size={24}
                color="black"
                onPress={() => navigateTo("Forum")}
            />
            <FontAwesome5
                name="envelope-open"
                size={24}
                color="black"
                onPress={() => navigateTo("Messages")}
            />
        </TabBarContainer>
    );
};

export default TabBar;
