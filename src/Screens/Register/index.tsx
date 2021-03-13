import React, { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, KeyboardTypeOptions } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { StackScreenProps } from '@react-navigation/stack';
import { Container, Header, Input, InputContainer, InputLabel, Button, ClickableTextContainer, ClickableText } from './styles';
import Loading from '../../Components/Loading/index';
import UserService from '../../Services/user.service';
import { IEndereco } from '../../Models/user.interface';

interface IInput {
  icon?: any;
  label: string;
  isSecure: boolean;
  keyBoardType: KeyboardTypeOptions
  onChange?(value: string): void;
}

const InputComponent: React.FC<IInput> = ({label, icon, isSecure, keyBoardType, onChange}) => {
  return (
    <InputContainer>
      <Feather name={icon} size={24} color="#0DD2FD" style={{position: 'absolute', marginLeft: 10}} />
      <InputLabel>{label}</InputLabel>
      <Input secureTextEntry={isSecure} keyboardType={keyBoardType} onChangeText={onChange}/> 
    </InputContainer>
  );
}

const Register = ({ navigation }: StackScreenProps<any>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [endereco, setEndereco] = useState<IEndereco>({
    logradouro: "Avenida Rodrigues Francisco Filho",
    bairro: "Vila Mogilar",
    numero: "2022",
    cidade: "Mogi Das Cruzes",
    cep: "08738-000"
  });
  
  function handleNameChange(name: string) {    
    setName(name)
  }
  function handleEmailChange(email: string) {
    setEmail(email)
  }
  function handleCelularChange(celular: string) {
    setCelular(celular)
  }
  function handleSenhaChange(senha: string) {
    setSenha(senha)
  }
  function handleConfirmSenhaChange(senha: string) {
    setConfirmSenha(senha)
  }

  async function buttonClick() {
    if (confirmSenha === senha) {
      setLoading(true);
      const data = await UserService.RegisterUser({name, email, celular, senha, endereco});
      setLoading(false);
      navigation.push('Login')
    }
  }

  return (
    <>
      {
        loading ? 
        <Loading text="Criando sua conta..." showLoading={loading}/>
        :
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <Container style={{paddingHorizontal: 30, paddingTop: 170, paddingBottom: 30}}>
              <Feather name="arrow-left" size={36} color="#003CC0" style={{position: 'absolute', top: 70, left: 30}} onPress={() => navigation.push('Login') }/>
              <View style={{marginBottom: 60, justifyContent: 'center', alignItems: 'center'}}>
                <Header>Create Account</Header>
                <Text>Create a new account</Text>
              </View>
              <InputComponent label="NAME" icon="user" isSecure={false} keyBoardType="default" onChange={handleNameChange} />
              <InputComponent label="EMAIL" icon="mail" isSecure={false} keyBoardType="email-address" onChange={handleEmailChange} />
              <InputComponent label="PHONE" icon="phone" isSecure={false} keyBoardType="phone-pad" onChange={handleCelularChange}  />
              <InputComponent label="PASSWORD" icon="lock" isSecure={true} keyBoardType="default" onChange={handleSenhaChange} />
              <InputComponent label="CONFIRM PASSWORD" icon="lock" isSecure={true} keyBoardType="default" onChange={handleConfirmSenhaChange} />
              <Button onPress={buttonClick}><Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>CREATE ACCOUNT</Text></ Button>
              <View style={{flexDirection: 'row'}}>
                <Text>Already have an account?</Text>
                <ClickableText style={{marginLeft: 8}} onPress={() => navigation.push('Login') }>Login</ClickableText>
              </View>
            </Container>
          </ScrollView>
        </SafeAreaView>
      }
    </>
  )
}

export default Register;