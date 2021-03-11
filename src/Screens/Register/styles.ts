import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #FFFFFF;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Header = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #003CC0;
`

export const Subtitle = styled.Text`
  font-size: 20px;
  color: #000;
`

export const Logo = styled.Image`
  width: 70px;
  height: 70px;
`

export const InputContainer = styled.View`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
  flex-direction: row;
`

export const Input = styled.TextInput`
  width: 100%;
  border: 2px solid #E3E9EF;
  border-radius: 6px;
  height: 70px;
  align-items: center;
  z-index: 1;
  padding-left: 50px;
`

export const InputLabel = styled.Text`
  color: lightgray;
  position: absolute;
  left: 34px;
  top: -10px;
  background-color: #ffffff;
  padding: 0 15px;
  z-index: 2;
`

export const Button = styled.TouchableOpacity`
  height: 70px;
  background-color: #003CC0;
  font-size: 18px;
  color: #fff;
  width: 100%;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

export const ClickableTextContainer = styled.Text`
  width: 100%;
  align-self: flex-end;
`

export const ClickableText = styled.Text`
  color: #003CC0;
  font-weight: 700;
`
