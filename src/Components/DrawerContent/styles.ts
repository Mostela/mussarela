import styled from 'styled-components/native';

export const DrawerHeader = styled.View`
    height: 185px;
    width: 100%;
    position: relative;
`

export const BackgroundBluredImage = styled.Image`
    width: 100%;
    height: 100%;
`

export const ProfileVitals = styled.View`
    position: absolute;
    bottom: 15px;
    width: 100%;
    padding: 15px;
`

export const ProfileImage = styled.Image`
    width: 65px;
    height: 65px;
    border-radius: 100px;
    margin-right: 15px;
`

export const ProfileName = styled.Text`
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 5px;
    font-weight: 600;
`

export const ProfileEmail = styled.Text`
    font-size: 14px;
    color: #ffffff;
`

export const AchievementsContainer = styled.View`
    background-color: #ffffff;
    padding: 5px;
    border-radius: 10px;
    flex-direction: row;
    margin-right: 8px;
`

export const AchievementsText = styled.Text`
    color: #000;
    font-size: 17px;
    font-weight: 700;
    margin-left: 5px;
`

export const DrawerNavigationOptionsContainer = styled.TouchableOpacity`
    padding: 0 13px;
`

export const DrawerNavigationOptions = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 60px;
`

export const DrawerNavigationOptionsText = styled.Text`
    color: #000;
    font-size: 14px;
    font-weight: 700;
    margin-left: 12px;
`
