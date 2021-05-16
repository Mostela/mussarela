import React, { useState, useEffect } from "react";
import { Text, View, Image, ListRenderItem, TouchableOpacity } from "react-native";
import PageHeader from "../../../../Components/PageHeader";
import { Container, FormContainer, ImagePickerContainer, ProductImageList, IProductImage, ButtonGradient, InputTitle } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { IProduct } from '../../../../Models/product.interface';
import Input from '../../../../Components/Input/index';

interface IAddProduct {
    currentProducts: IProduct[];
    setNewProduct(product: IProduct[]): void;
    setaddProductModal(active: boolean): void;
}

const AddProduct = ({ setaddProductModal, setNewProduct, currentProducts }: IAddProduct) => {
    const [title, setTitle]  = useState<string>('');
    const [description, setDescription]  = useState<string>('');
    const [quantity, setQuantity]  = useState<string>('');
    const [images, setImage] = useState<IProductImage[]>([{
        id: '1',
        image: '',
        isImage: false
    }]);

    function saveProduct() {
        setNewProduct([...currentProducts, {
            id: Math.floor(Math.random() * 100).toString(),
            description,
            title,
            quantity,
            image: images
        }])
        closeModal();
    }

    function closeModal() {
        setaddProductModal(false)
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });    
        if (!result.cancelled) {
            setImage([{id: Math.floor(Math.random() * 100).toString(), image: result.uri, isImage: true}, ...images]);
        }
    };

    const renderItem: ListRenderItem<IProductImage> = ({ item, index }) => {
        const {id, image, isImage} = item

        return isImage ?
        <View style={{ width: 101, height: 101, borderRadius: 10, marginRight: 15, overflow: "hidden", marginBottom: 15 }} key={id}>
            <Image source={{ uri: image }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
        </View>
        :
        <ImagePickerContainer style={{ borderWidth: 1, borderColor: "#808080", width: 101, height: 101 }} onPress={() => pickImage()} key={id}>
            <Ionicons name="md-image-outline" size={30} color="#808080" />
            <Text style={{ fontSize: 5, fontWeight: '700', opacity: 0.25 }}>Clique Para Adicionar Uma Imagem</Text>
        </ImagePickerContainer>
    }

    const ImagePickerView = () => {
        return <View>
            <InputTitle>Fotos</InputTitle>
            <View style={{ flexDirection: "row", width: "100%" }}>
                <ProductImageList
                    data={images}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View> 
    }

    return (
        <Container>
            <PageHeader
                title={"Cadastrar Doação"}
                shareable={false}
                goBack={closeModal}
            />
            <FormContainer style={{borderRadius: 10}}>
                <Input title="Título do produto" placeholder="Título" keyBoardType={'default'} onChangeText={(title) => setTitle(title)} key="title" />
                <Input title="Descrição" placeholder="Descrição" keyBoardType={'default'} key="description" onChangeText={(description) => setDescription(description)} />
                <ImagePickerView />
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <View style={{flex: 1}}>
                        <Input title="Quantidade" placeholder="0" keyBoardType={'number-pad'} onChangeText={(quantity) => setQuantity(quantity)} key="quantity" />
                    </View>
                    <View style={{flex: 2, marginLeft: 20}}>
                        <Input title="Categoria" placeholder="Categoria" keyBoardType={'default'} key="category" />
                    </View>
                </View>
                <TouchableOpacity onPress={() => saveProduct()}>
                    <ButtonGradient colors={['#302DCE', '#f700ff']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} >
                        <Text style={{color: '#fff', fontSize: 24, fontWeight: '700'}}>Salvar</Text>
                    </ButtonGradient>
                </TouchableOpacity>
            </FormContainer>
        </Container>
    );
};

export default AddProduct;
