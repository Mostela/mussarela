import React, { useState } from "react";
import { View, Text, StatusBar, Image, Modal } from "react-native";
import { NewItemContainer, NewProductPlusIcon } from "./styles";
import {
    Container,
    ContentContainer,
    SectionTitle,
} from "./../DonationOpened/styles";
import PageHeader from "../../../../Components/PageHeader/index";
import DonationProducts from "../../../../Components/DonationProduct";
import { IProduct } from "../../../../Models/product.interface";
import HeartIcon from './../../../../../assets/heart.png'
import { Ionicons } from "@expo/vector-icons";
import AddProduct from './../../Modals/AddProduct/index'
interface IModal {
    setModalVisible(active: boolean): void;
}

const CreateDonation = ({ setModalVisible }: IModal) => {
    StatusBar.setHidden(true);
    const [products, setProduct] = useState<IProduct[]>([
        {
            id: "1",
            title: "Livros e Camisetas",
            description:
                "Livro da clarice linspector super atual e conceituado",
            quantity: "2",
            image: require("./../../../../../assets/DonationImage.png"),
        },
        {
            id: "2",
            title: "Livros e Camisetas",
            description:
                "Livro da clarice linspector super atual e conceituado",
            quantity: "2",
            image: require("./../../../../../assets/DonationImage.png"),
        },
    ]);

    const [addProductModal, setaddProductModal] = useState<boolean>(false);

    const addProduct = () => {
        setProduct([...products, {
            id: Math.floor((Math.random() * 100) + 3).toString(),
            title: "Livros e Camisetas",
            description: "Livro da clarice linspector super atual e conceituado",
            quantity: "2",
            image: require("./../../../../../assets/DonationImage.png"),
        }])
    }

    return (
        <Container>
            <PageHeader
                title={"Nova doação"}
                shareable={false}
                goBack={() => setModalVisible(false)}
            />
            <ContentContainer>
                <View style={{ marginBottom: 20 }}>
                    <SectionTitle>Produtos</SectionTitle>
                    {products.map((product) => {
                        return (
                            <DonationProducts key={product.id} {...product} />
                        );
                    })}
                    <NewItemContainer onPress={() => setaddProductModal(true)}>
                        <View style={{ width: 40, height: 40, marginBottom: 5 }}>
                            <Image
                                source={ HeartIcon }
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    resizeMode: "contain"
                                }}
                            />
                            <NewProductPlusIcon>
                                <Ionicons name="add" size={10} color="white" />
                            </NewProductPlusIcon>
                        </View>
                        <Text style={{ color: "#808080" }}>Clique para adicionar um produto</Text>
                    </NewItemContainer>
                    <Modal
                    animationType="slide"
                    presentationStyle={"fullScreen"}
                    visible={addProductModal}
                    onRequestClose={() => setaddProductModal(false)}
                    >
                        <AddProduct setaddProductModal={setaddProductModal}/>
                    </Modal>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <SectionTitle>Endereço</SectionTitle>
                </View>
            </ContentContainer>
        </Container>
    );
};

export default CreateDonation;
