import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    padding: 0px 30px 8px 30px;
    background-color: #f2f2f2;
`;

export const HeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const Logo = styled.Image`
    width: 44px;
    height: 26px;
`;

export const Title = styled.Text`
    color: #000;
    font-weight: 700;
    font-size: 26px;
`;

export const SearchBarContainer = styled.View`
    flex-direction: row;
`;

export const SearchBar = styled.TextInput`
    height: 30px;
    flex: 1;
    border-radius: 5px;
    align-items: center;
    color: #808080;
    padding-left: 10px;
    font-size: 14px;
    background-color: #E2E2E2;
`;

export const FilterButton = styled.TouchableOpacity`
    border-radius: 5px;
    background-color: #E2E2E2;
    align-self: flex-end;
    color: #000;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 8px 3px 8px 5px;
    margin-left: 10px;
    width: 81px;
    height: 30px;
`;