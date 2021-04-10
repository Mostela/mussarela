import styled from "styled-components/native";
import { FlatList } from 'react-native';
import { IDonation } from '../../../../Models/components.interface';
import { LinearGradient } from "expo-linear-gradient";

export const HomeContainer = styled.View`
    background-color: #fff;
    flex: 1;
`

export const FilterButton = styled.TouchableOpacity`
    border-radius: 5px;
    background-color: #fff;
    align-self: flex-end;
    color: #000;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 2px 10px 2px 5px;
    margin-left: 8px;
    width: 90px;
    height: 30px;
`;

export const CategoryScroll = styled.ScrollView`
    padding-top: 16px;
    padding-bottom: 16px;
`;

export const DonationListContainer = styled(FlatList as new () => FlatList<IDonation>)`
  flex: 1;
  padding: 0 10px;
`

export const SearchInput = styled.TextInput`
    height: 30px;
    flex: 1;
    border-radius: 6px;
    border: .5px solid #808080;
    align-items: center;
    color: rgba(0, 0, 0, 0.25);
    padding-left: 8px;
    font-size: 14px;
`

export const GradientContainer = styled(LinearGradient)`
    height: 100%;
`
