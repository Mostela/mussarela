import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";

import { TabBarContainer } from './styles';
import { MaterialCommunityIcons, FontAwesome5, Ionicons  } from '@expo/vector-icons'; 

const TabBar: React.FC<BottomTabBarProps> = ({ navigation }) => {
    function navigateTo(route: string) {
        return navigation.navigate(route);
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
