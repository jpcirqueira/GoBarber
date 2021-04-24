import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background'; 
import { Container, Form, FormInput, SubmitButton, SignLinkText, SignLink } from './styles';

const SignIn = () => {
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
        <SubmitButton OnPress={() => {}}>
          Acessar
        </SubmitButton>
      </Form>
      <SignLink OnPress={() => {}}>
        <SignLinkText>Criar conta gratuita</SignLinkText> 
      </SignLink>
    </Container>
  </Background>
  );
}

export default SignIn;