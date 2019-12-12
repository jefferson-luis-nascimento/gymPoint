import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/images/logo.png';
import { Wrapper, Container } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="GYMPOINT" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <label htmlFor="email">SEU E-MAIL</label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="exemplo@email.com"
          />
          <label htmlFor="password">SUA SENHA</label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="********"
          />
          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no Sistema'}
          </button>
        </Form>
      </Container>
    </Wrapper>
  );
}
