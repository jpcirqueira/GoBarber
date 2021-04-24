import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background'; 
import { Container, Form, FormInput, SubmitButton, SignLinkText, SignLink } from './styles';

const SignIn = ({ navigation }) => {
  return (
  <Background>
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput 
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="nome"
          placeholder="Digite seu E-mail"
        />
        <FormInput 
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua senha secreta"
        />
        <SubmitButton onPress={() => console.log('tester')}>
          Acessar
        </SubmitButton>
      </Form>
      <SignLink onPress={() => navigation.navigate('SignUp')}>
        <SignLinkText>Criar conta gratuita</SignLinkText> 
      </SignLink>
    </Container>
  </Background>
  );
}

export default SignIn;