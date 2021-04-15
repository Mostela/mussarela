import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient"; 

export const TabBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: transparent;
  padding-top: 15px;
  padding-bottom: 10px;
  align-items: center;
  margin: 0 10px;
`

export const AddDonationButton = styled(LinearGradient)`
  border-radius: 10px;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
`
