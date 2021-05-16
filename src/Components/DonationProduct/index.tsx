import React, { useState, useEffect } from "react";
import {
    HorizontalView,
    ProductContainer,
    ProductImage,
    ProductInfoContainer,
    ProductTitle,
    ProductButtonContainer,
    ProductDescription,
    ButtonGradient,
    WantButton,
} from "./styles";
import { Text } from "react-native";
import { IProduct } from '../../Models/product.interface';
import { Feather } from "@expo/vector-icons";

const DonationProducts = ({
    id,
    title,
    description,
    quantity,
    image,
}: IProduct) => {

    useEffect(() => {
        console.log(image, 'Image porraaaaa');
        
    })

    return (
        <ProductContainer key={id}>
            <ProductImage source={{ uri: image[0].image }} />
            <ProductInfoContainer>
                <ProductTitle>{title}</ProductTitle>
                <ProductDescription>{description}</ProductDescription>
                <ProductButtonContainer>
                    <HorizontalView>
                        <Feather name="box" size={20} color="black" />
                        <Text style={{ marginLeft: 5 }}>{quantity}</Text>
                    </HorizontalView>
                    <ButtonGradient
                        colors={["#302DCE", "#f700ff"]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    >
                        <WantButton onPress={() => console.log("ola")}>
                            <Text
                                style={{
                                    color: "#fff",
                                    fontSize: 12,
                                    fontWeight: "700",
                                }}
                            >
                                Alterar
                            </Text>
                        </WantButton>
                    </ButtonGradient>
                </ProductButtonContainer>
            </ProductInfoContainer>
        </ProductContainer>
    );
};

export default DonationProducts;
