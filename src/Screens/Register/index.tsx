import React from 'react';
import { Text, View, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, KeyboardTypeOptions } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

import { Container, Header, Logo, Input, InputContainer, InputLabel, Button, ClickableTextContainer, ClickableText } from './styles';

interface IInput {
  icon?: any;
  label: string;
  isSecure: boolean;
  keyBoardType: KeyboardTypeOptions
  onChange?(): void;
}

const InputComponent: React.FC<IInput> = ({label, icon, isSecure, keyBoardType}) => {
  return (
    <InputContainer>
      <Feather name={icon} size={24} color="#0DD2FD" style={{position: 'absolute', marginLeft: 10}} />
      <InputLabel>{label}</InputLabel>
      <Input secureTextEntry={isSecure} keyboardType={keyBoardType}/> 
    </InputContainer>
  );
}

function buttonClick() {
  console.log('hello');
}

const Register = ({ navigation }: StackScreenProps<any>) => {
  return <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Container style={{paddingHorizontal: 30, paddingTop: 170, paddingBottom: 30}}>
          <Feather name="arrow-left" size={36} color="#003CC0" style={{position: 'absolute', top: 70, left: 30}} onPress={() => navigation.push('Login') }/>
          <View style={{marginBottom: 60, justifyContent: 'center', alignItems: 'center'}}>
            <Header>Create Account</Header>
            <Text>Create a new account</Text>
          </View>
          <InputComponent label="NAME" icon="user" isSecure={false} keyBoardType="default"/>
          <InputComponent label="EMAIL" icon="mail" isSecure={false} keyBoardType="email-address"/>
          <InputComponent label="PHONE" icon="phone" isSecure={false} keyBoardType="phone-pad"/>
          <InputComponent label="PASSWORD" icon="lock" isSecure={true} keyBoardType="default"/>
          <InputComponent label="CONFIRM PASSWORD" icon="lock" isSecure={true} keyBoardType="default"/>
          <Button onPress={buttonClick}><Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>CREATE ACCOUNT</Text></ Button>
          <View style={{flexDirection: 'row'}}>
            <Text>Already have an account?</Text>
            <ClickableText style={{marginLeft: 8}} onPress={() => navigation.push('Login') }>Login</ClickableText>
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
}

export default Register;