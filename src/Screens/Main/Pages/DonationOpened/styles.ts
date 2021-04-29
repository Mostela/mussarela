import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'

export const HorizontalView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Container = styled.View`
    flex: 1;
    background-color: #F2F2F2;
` 

export const ContentContainer = styled.ScrollView`
    padding: 0 12px;
    margin-top: 10px;
` 

export const SectionTitle = styled.Text`
    color: #000;
    font-size: 24px;
    margin-left: 18px;
    font-weight: 700;
    margin-bottom: 10px;
`

// DONATOR SECTION - (BEGGINING)

export const DonatorImage = styled.Image`
    width: 75px;
    height: 75px;
    border-radius: 100px;
    margin-right: 15px;
    margin-left: 3px;
`

export const DonatorName = styled.Text`
    font-size: 14px;
    color: #000;
    margin-left: 6px;
`

export const BasicInfo = styled(HorizontalView)`
    margin-bottom: 10px;
`

export const AccountInfoContainer = styled.View`
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: #E2E2E2;
    border-radius: 4px;
    margin-right: 15px;
    height: 45px;
`

export const AccountInfoTitle = styled.Text`
    font-size: 8px;
    margin-bottom: 5px;
`

export const AccountInfoText = styled.Text`
    font-size: 10px;
    font-weight: 700;
    margin-left: 5px;
`

export const IconContainer = styled.View`
    width: 20px;
    height: 20px;
`

export const Icon = styled.Image`
    width: 100%;
    height: 100%;
`

// DONATOR SECTION - (ENDDING)
