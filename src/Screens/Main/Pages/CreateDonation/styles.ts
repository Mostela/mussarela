import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'

export const NewItemContainer = styled.TouchableOpacity`
    height: 100px;
    width: 100%;
    background-color: #E2E2E2;
    border-radius: 6px;
    overflow: hidden;
    padding: 10px 0;
    justify-content: center;
    align-items: center;
`

export const NewProductPlusIcon = styled.View`
    position: absolute;
    bottom: 0;
    right: 3px;
    border-radius: 4px;
    width: 12.5px;
    height: 12.5px;
    background-color: #808080;
    justify-content: center;
    align-items: center;
`

export const ButtonGradient = styled(LinearGradient)`
    border-radius: 25px;
    overflow: hidden;
    height: 50px;
    width: 50%;
    justify-content: center;
    align-items: center;
`