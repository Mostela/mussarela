import { FlatList } from 'react-native';
import styled from 'styled-components/native';

interface IDonation {
  id: string;
  title: string;
  donator: string;
  distance: string;
  viewsCounter?: number | string;
  likesCounter?: number | string;
}

export const DonationList = styled(FlatList as new () => FlatList<IDonation>)`
  flex: 1;
`

export const DonationContainer = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  flex-direction: row;
  padding: 0;
  margin-bottom: 20px;
  border-radius: 6px;
`

export const DonationImage = styled.View`
  height: 100%;
  width: 108px;
  background-color: #E6E6E6;
  border-radius: 6px;
`

export const DonationInfo = styled.View`
  background-color: white;
  padding: 10px 10px 10px 18px;
  flex-direction: column;
  height: 100%;
  flex: 1;
`

export const DonationTitle = styled.Text`
  font-size: 10px;
  color: #00000082;
`;

export const ProfilePicMiniature = styled.View`
  height: 22px;
  width: 22px;
  background-color: #E6E6E6;
  border-radius: 100px;
`