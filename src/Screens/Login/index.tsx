import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import { Container, Header, Logo, Input, InputContainer, InputLabel, Button, ClickableTextContainer, ClickableText } from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import Loading from '../../Components/Loading/index';
import UserService from '../../Services/user.service';

interface IInput {
  icon?: any;
  label: string;
  isSecure: boolean;
  onChangeText?(value: string): void;
}

const InputComponent: React.FC<IInput> = ({label, icon, isSecure, onChangeText}) => {
  return (
    <InputContainer>
      <Feather name={icon} size={24} color="#0DD2FD" style={{position: 'absolute', marginLeft: 10}} />
      <InputLabel>{label}</InputLabel>
      <Input 
        secureTextEntry={isSecure}
        onChangeText={onChangeText}/> 
    </InputContainer>
  );
}

const Login = ({ navigation }: StackScreenProps<any>) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);


  async function login() {
    // setLoading(true);
    // const response = await UserService.LogUserIn({email, senha: password})
    // console.log(response);
    
    // if (response?.status === 200) {
      // setLoading(false);
      navigation.push('Main')
    // }
    // setLoading(false);

  }

  return (
    <>
      {
        loading ? 
        <Loading text="Logando na sua conta..." showLoading={loading}/>
        :
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}}>
          <Container>
            <View style={{marginBottom: 60, justifyContent: 'center', alignItems: 'center'}}>
              <Logo source={require('./../../../assets/mockLogo.jpg')} />
              <Header>Welcome back</Header>
              <Text>Sign to continue</Text>
            </View>
            <InputComponent label="Email" icon="mail" isSecure={false} onChangeText={(email) => setEmail(email)}/>
            <InputComponent label="Password" icon="lock" isSecure={true} onChangeText={(password) => setPassword(password)}/>
            <View style={{alignSelf: 'flex-end', marginBottom: 50}}>
              <ClickableText>Forgot Password?</ClickableText>
            </View>
            <Button onPress={login}><Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>LOGIN</Text></ Button>
            <View style={{flexDirection: 'row'}}>
              <Text>Don't have an account?</Text>
              <ClickableText style={{marginLeft: 8}} onPress={() => navigation.push('Register')}>create new account</ClickableText>
            </View>
          </Container>
        </KeyboardAvoidingView>
      }
    </>
  )
}

export default Login;