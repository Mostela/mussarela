import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'

export const HorizontalView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const ProductContainer = styled(HorizontalView)`
    height: 100px;
    width: 100%;
    background-color: #E2E2E2;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 10px;
`

export const ProductImage = styled.Image`
    height: 100%;
    width: 148px;
`

export const ProductInfoContainer = styled.View`
    flex: 1;
    background-color: transparent;
    padding: 10px;
`

export const ProductTitle = styled.Text`
    font-size: 14px;
    color: #000;
    font-weight: 700;
    margin-bottom: 5px;
`

export const ProductDescription = styled.Text`
    font-size: 12px;
    color: #808080;
    margin-bottom: 5px;
`

export const ProductButtonContainer = styled(HorizontalView)`
    justify-content: space-between;
`

export const WantButton = styled.TouchableOpacity`
    color: #fff;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    flex: 1;
`

export const ButtonGradient = styled(LinearGradient)`
    border-radius: 5px;
    overflow: hidden;
    height: 20px;
    width: 70px;
`