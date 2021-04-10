import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'
export const DonationContainer = styled.View`
    height: 248px;
    width: 49%;
    padding: 10px 0;
    border-radius: 3px;
    margin-bottom: 10px;
    border: 1px solid #00000055;
`

export const WantButton = styled.TouchableOpacity`
    color: #fff;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    padding: 2px 15px;
`

export const ButtonGradient = styled(LinearGradient)`
    border-radius: 25px;
    overflow: hidden;
`
