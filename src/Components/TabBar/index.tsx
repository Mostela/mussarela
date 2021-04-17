import React, { useState, useCallback } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";
import { TabBarContainer, AddDonationButton } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Modal, Image, View, ImageSourcePropType } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CreateDonation from "../../Screens/Main/Pages/CreateDonation";
import HomeIcon from './../../../assets/home.png'
import HomeIconActive from './../../../assets/home_active.png'
import HeartIcon from './../../../assets/heart.png'
import HeartIconActive from './../../../assets/heart_active.png'
import MessageIcon from './../../../assets/message.png'
import MessageIconActive from './../../../assets/message_active.png'
import NotificationIcon from './../../../assets/notification.png'
import NotificationIconActive from './../../../assets/notification_active.png'

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
                        source={currentTab == "Home" ? HomeIcon : HomeIconActive}
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
            <View style={{ width: 40, height: 40 }}>
                <TouchableOpacity onPress={() => navigateTo("Home")}>
                    <Image
                        source={currentTab !== "Home" ? HomeIcon : HomeIconActive}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain",
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ width: 40, height: 40 }}>
                <TouchableOpacity onPress={() => navigateTo("Volunteer")}>
                    <Image
                        source={currentTab !== "Volunteer" ? HeartIcon : HeartIconActive}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain",
                        }}
                    />
                </TouchableOpacity>
            </View>
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
            <View style={{ width: 40, height: 40 }}>
                <TouchableOpacity onPress={() => navigateTo("Forum")}>
                    <Image
                        source={currentTab !== "Forum" ? MessageIcon : MessageIconActive}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain",
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ width: 40, height: 40 }}>
                <TouchableOpacity onPress={() => navigateTo("Messages")}>
                    <Image
                        source={currentTab !== "Messages" ? NotificationIcon : NotificationIconActive}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain",
                        }}
                    />
                </TouchableOpacity>
            </View>
        </TabBarContainer>
    );
};

export default TabBar;
