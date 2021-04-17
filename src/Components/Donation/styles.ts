import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'
export const DonationContainer = styled.View`
    height: 248px;
    width: 49%;
    border-radius: 3px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    background-color: #E2E2E2;
    overflow: hidden;
`

export const WantButton = styled.TouchableOpacity`
    color: #fff;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    padding: 2px 15px;
`

export const ButtonGradient = styled(LinearGradient)`
    border-radius: 5px;
    overflow: hidden;
    height: 20px;
`

export const QuantityContainer = styled.View`
    align-items: center;
    padding: 2px;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: row;
    background-color: #E2E2E2;
    width: 50px;
    z-index: 9;
`