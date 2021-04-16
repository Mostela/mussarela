import React, { useState, useCallback } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";
import { TabBarContainer, AddDonationButton } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Modal, Image, View, ImageSourcePropType } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CreateDonation from "../../Screens/Main/Pages/CreateDonation";

interface ITabIcon {
    icon: ImageSourcePropType;
    iconActive: ImageSourcePropType;
    active: boolean;
    selectRoute(): void;
}

const TabBar: React.FC<BottomTabBarProps> = ({ navigation }) => {
    const route = useRoute();
    const [modalVisible, setModalVisible] = useState(false);
    const [currentTab, setCurrentTab] = useState<string>(route.name)


    function navigateTo(route: string) {
        setCurrentTab(route)
        return navigation.navigate(route);
    }

    const TabIcon = useCallback(({ icon, iconActive, active, selectRoute }: ITabIcon) => {
        return (
            <View style={{ width: 40, height: 40 }}>
                <TouchableOpacity onPress={() => selectRoute()}>
                    <Image
                        source={active ? iconActive : icon}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain",
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }, [currentTab])

    return (
        <TabBarContainer
            style={{ borderTopWidth: 1, borderTopColor: "#88888833" }}
        >
            <TabIcon
                icon={require("./../../../assets/home.png")}
                iconActive={require("./../../../assets/home_active.png")}
                active={currentTab == "Home"}
                selectRoute={() => navigateTo("Home")}
            />
            <TabIcon
                icon={require("./../../../assets/heart.png")}
                iconActive={require("./../../../assets/heart_active.png")}
                active={currentTab == "Volunteer"}
                selectRoute={() => navigateTo("Volunteer")}
            />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <AddDonationButton
                    colors={["#302DCE", "#f700ff"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
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
            <TabIcon
                icon={require("./../../../assets/message.png")}
                iconActive={require("./../../../assets/message_active.png")}
                active={currentTab == "Forum"}
                selectRoute={() => navigateTo("Forum")}
            />
            <TabIcon
                icon={require("./../../../assets/notification.png")}
                iconActive={require("./../../../assets/notification_active.png")}
                active={currentTab == "Messages"}
                selectRoute={() => navigateTo("Messages")}
            />
        </TabBarContainer>
    );
};

export default TabBar;
