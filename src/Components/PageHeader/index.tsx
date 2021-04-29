import React from "react";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import { Container, Title, HeaderBtn } from "./styles";

interface IPageHeader {
    title: string;
    shareable: boolean;
    goBack(): void;
}

const PageHeader = ({ title, shareable, goBack }: IPageHeader) => {
    return (
        <Container>
            <HeaderBtn onPress={() => goBack()}>
                <SimpleLineIcons name="arrow-left" size={28} color="black" />
            </HeaderBtn>
            <Title>{title}</Title>
            <HeaderBtn style={{opacity: shareable ? 1 : 0}}>
                <Ionicons name="share-outline" size={24} color="black" />
            </HeaderBtn>
        </Container>
    );
};

export default PageHeader;
