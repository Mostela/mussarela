import styled from "styled-components/native";
import { FlatList } from 'react-native';
import { IDonation } from '../../../../Models/components.interface';

export const HomeContainer = styled.View`
    background-color: #fff;
    flex: 1;
`

export const FilterButton = styled.TouchableOpacity`
    border-radius: 25px;
    background-color: #ebebeb;
    align-self: flex-end;
    color: #000;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 10px 20px;
    margin-left: 14px;
    margin-right: 14px;
`;

export const CategoryScroll = styled.ScrollView`
    padding-top: 16px;
    padding-bottom: 16px;
`;

export const DonationListContainer = styled(FlatList as new () => FlatList<IDonation>)`
  flex: 1;
  padding: 0 10px;
`
