import { ImageSourcePropType } from "react-native";

export interface IProduct {
    id: string;
    title: string;
    description: string;
    quantity: string;
    image: ImageSourcePropType;
}