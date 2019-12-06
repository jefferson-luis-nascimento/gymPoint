import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/images/logo.png';
import { Wrapper, Container } from './styles';

export default function SignIn() {
  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="GYMPOINT" />
        <Form>
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
          <button type="submit">Entrar no Sistema</button>
        </Form>
      </Container>
    </Wrapper>
  );
}
