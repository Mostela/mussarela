import { DrawerContentComponentProps } from "@react-navigation/drawer";

export interface IDonation {
    id: string;
    title: string;
    author: string;
    distance: string;
    image: any;
}

export interface IDrawerOption {
    id: string;
    name: string;
    label: string;
    children: any;
    navigation: DrawerContentComponentProps<any>;
}