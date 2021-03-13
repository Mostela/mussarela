import React from "react";
import { ActivityIndicator, Text } from "react-native";

import { LoadingComponent } from "./styles";

interface ILoading {
    text: string;
    showLoading: boolean;
}
const Loading = ({ text, showLoading }: ILoading) => {
    return (
        <>
            {showLoading ? (
                <LoadingComponent>
                    <ActivityIndicator size="large" color="#000"/>
                    <Text style={{marginTop: 20, fontSize: 16}}>{text}</Text>
                </LoadingComponent>
            ) : null}
        </>
    );
};

export default Loading;
