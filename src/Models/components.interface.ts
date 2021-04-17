import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";

export interface IDonation {
    id: string;
    title: string;
    author: string;
    distance: string;
    image: any;
    navigation: StackNavigationProp<any>;
}

export interface IDrawerOption {
    id: string;
    name: string;
    label: string;
    children: any;
    navigation: DrawerContentComponentProps<any>;
}