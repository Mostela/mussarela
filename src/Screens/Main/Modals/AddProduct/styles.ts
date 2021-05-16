import { FlatList, ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'

export interface IProductImage {
    id: string;
    image: string;
    isImage: boolean;
}


export const Container = styled.View`
    flex: 1;
`

export const FormContainer = styled.View`
    background-color: #E2E2E2;
    padding: 15px;
    margin: 20px 15px;
`

export const InputTitle = styled.Text`
    font-size: 14px;
    color: #000;
    margin-bottom: 5px;
`

export const InputField = styled.TextInput`
    padding-bottom: 5px;
    color: #808080;
    margin-bottom: 15px;
`

export const ImagePickerContainer = styled.TouchableOpacity`
    border-radius: 10px;
    background-color: #F2F2F2;
    justify-content: center;
    align-items: center;
`

export const ProductImageList = styled(FlatList as new () => FlatList<IProductImage>)`
  flex: 1;
`

export const ButtonGradient = styled(LinearGradient)`
    border-radius: 6px;
    overflow: hidden;
    height: 50px;
    width: 50%;
    justify-content: center;
    align-items: center;
`
