import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/images/logo.png';

import { Container, Logo, Form, FormInput, SubmitButton } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [id, setId] = useState('');

  function handleSubmit() {
    console.tron.log(loading, id);
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <Logo source={logo} />
      <Form>
        <FormInput
          keyboardType="number-pad"
          placeholder="Informe seu ID de cadastro"
          value={id}
          onChangeText={setId}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
