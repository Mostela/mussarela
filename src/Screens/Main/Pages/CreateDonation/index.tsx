import React from "react";
import { KeyboardTypeOptions, Text, View } from "react-native";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import { Container, Header, FormContainer, FormContainerGroup, ImageContainer } from "./styles";
import { TextInput } from "react-native-gesture-handler";

interface IPickImage {
    label: string;
}

interface IInput {
    label: string;
    keyBoardType: KeyboardTypeOptions
    onChange?(value: string): void;
}

const PickImage = ({label}: IPickImage) => {
    return <ImageContainer style={{ borderRadius: 10 }}>
        <Ionicons name="image-outline" size={30} color="black" />
        <Text style={{ fontSize: 8, color: '#00000055', fontWeight: '700', marginTop: 5 }}>{label}</Text>
    </ImageContainer>
}

const InputComponent: React.FC<IInput> = ({label, keyBoardType, onChange}) => {
    return (
        <View>
            <Text style={{fontSize: 12, marginBottom: 6, fontWeight: '700'}}>{label}</Text>
            <TextInput keyboardType={keyBoardType} onChangeText={onChange}/>
        </View>
    );
}

const CreateDonation = () => {
    return (
        <Container>
            <Header>
                <SimpleLineIcons name="arrow-left" size={30} color="black" style={{position: 'absolute', left: 0}} />
                <Text style={{ fontSize: 18, fontWeight: '700' }}>NOVA DOAÇÃO</Text>
            </Header>

            <FormContainer>
                <FormContainerGroup>
                    <PickImage label="Imagem principal" />
                    <View style={{flex: 1}}>
                        <InputComponent label="Título da Doação" keyBoardType="default" />
                    </View>
                </FormContainerGroup>

            </FormContainer>
        </Container>
    );
};

export default CreateDonation;
