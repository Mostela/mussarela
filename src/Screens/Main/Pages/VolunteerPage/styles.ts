import styled from 'styled-components/native';
import { Dimensions } from 'react-native'

export const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Modal = styled.Modal`
    height: 180px;
    width: ${Dimensions.get('window').width} - 80px;
`
