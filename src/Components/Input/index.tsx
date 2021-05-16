import React from 'react';
import { View, KeyboardTypeOptions } from 'react-native'
import { InputField, InputTitle } from './styles';

interface IInput {
    title: string;
    placeholder: string;
    keyBoardType: KeyboardTypeOptions
    onChangeText?(value: string): void;
}

const Input: React.FC<IInput> = ({ title, placeholder, keyBoardType, onChangeText }) => {
    return (
        <View>
            <InputTitle>{title}</InputTitle>
            <InputField placeholder={placeholder} keyboardType={keyBoardType} style={{ borderBottomWidth: 1 }} multiline={true} onChangeText={onChangeText} key={placeholder} />
        </View>
    )
};

export default Input;