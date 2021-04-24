import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import { Container, Form, FormInput, SubmitButton, SignLinkText, SignLink } from './styles';

const SignUp = ({ navigation }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(){
    
  }

  return (
    <Background>
       <Container>
      <Image source={logo} />
      <Form>
      <FormInput 
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="nome"
          placeholder="Nome Completo"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <FormInput 
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="nome"
          placeholder="Digite seu E-mail"
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <FormInput 
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua senha secreta"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <SubmitButton onPress={handleSubmit}>
          Acessar
        </SubmitButton>
      </Form>
      <SignLink onPress={() => navigation.navigate('SignIn')}>
        <SignLinkText>Já tenho Conta</SignLinkText> 
      </SignLink>
    </Container>
    </Background>
    );
}
export default SignUp;