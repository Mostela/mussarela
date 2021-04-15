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
