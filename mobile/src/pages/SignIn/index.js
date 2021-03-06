import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import Background from '~/components/Background'; 
import { SignInRequest } from '~/store/modules/auth/actions';
import { Container, Form, FormInput, SubmitButton, SignLinkText, SignLink } from './styles';

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(){
    dispatch(SignInRequest(email, password));
  }

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
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <FormInput 
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua senha secreta"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
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