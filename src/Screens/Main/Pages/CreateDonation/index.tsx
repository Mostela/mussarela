import React, { useState } from "react";
import { View, Text, StatusBar, Image, Modal } from "react-native";
import { NewItemContainer, NewProductPlusIcon, ButtonGradient } from "./styles";
import {
    Container,
    ContentContainer,
    SectionTitle,
} from "./../DonationOpened/styles";
import PageHeader from "../../../../Components/PageHeader/index";
import DonationProducts from "../../../../Components/DonationProduct";
import { IProduct } from "../../../../Models/product.interface";
import HeartIcon from './../../../../../assets/heart.png'
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import AddProduct from './../../Modals/AddProduct/index'
interface IModal {
    setModalVisible(active: boolean): void;
}

const CreateDonation = ({ setModalVisible }: IModal) => {
    StatusBar.setHidden(true);
    const [products, setProduct] = useState<IProduct[]>([]);

    const [addProductModal, setaddProductModal] = useState<boolean>(false);

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
                        <AddProduct setaddProductModal={setaddProductModal} currentProducts={products} setNewProduct={setProduct}/>
                    </Modal>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <SectionTitle>Endereço</SectionTitle>
                    <NewItemContainer onPress={() => setaddProductModal(true)}>
                        <View style={{ width: 40, height: 40, marginBottom: 5 }}>
                            <SimpleLineIcons name="location-pin" size={40} color="#808080" />
                            <NewProductPlusIcon>
                                <Ionicons name="add" size={10} color="white" />
                            </NewProductPlusIcon>
                        </View>
                        <Text style={{ color: "#808080" }}>Clique para adicionar um endereço</Text>
                    </NewItemContainer>
                </View>
                <View style={{width: '100%', flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <ButtonGradient colors={['#302DCE', '#f700ff']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}>
                        <Text style={{color: '#fff', fontSize: 20, fontWeight: '700'}}>Salvar</Text>
                    </ButtonGradient>
                </View>
            </ContentContainer>
        </Container>
    );
};

export default CreateDonation;
