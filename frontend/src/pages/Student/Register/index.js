import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import {
  Container,
  Content,
  Header,
  HeaderLabel,
  HeaderOptions,
  ButtonBack,
  ButtonRegister,
  FormControl,
  FormDiv,
  FormDivWithoutPadding,
} from '~/styles/stylesGlobal';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nome tem que ter no mínimo 2 caracteres')
    .required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  age: Yup.number('Idade inválida')
    .integer('Idade inválida')
    .positive('Idade não pode ser negativa')
    .max(150, 'Idade inválida')
    .required('Idade é obrigatório'),
  weight: Yup.number('Peso inválido')
    .positive('Peso não pode ser negativo')
    .max(500, 'Peso inválido')
    .required('Peso é obrigatório'),
  height: Yup.number('Altura inválida')
    .positive('Altura não pode ser negativo')
    .max(3, 'Altura inválida')
    .required('Altura é obrigatório'),
});

export default function Register({ history }) {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  function handleBack() {
    history.push('/student');
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Header>
            <HeaderLabel>Cadastro de alunos</HeaderLabel>
            <HeaderOptions>
              <ButtonBack onClick={handleBack}>
                <div>
                  <MdKeyboardArrowLeft size={20} color="#fff" />
                  <span>VOLTAR</span>
                </div>
              </ButtonBack>
              <ButtonRegister type="submit">
                <div>
                  <MdCheck size={20} color="#fff" />
                  <span>SALVAR</span>
                </div>
              </ButtonRegister>
            </HeaderOptions>
          </Header>
          <FormControl>
            <label htmlFor="name">NOME COMPLETO</label>
            <Input name="name" id="name" type="text" placeholder="John Doe" />
            <label htmlFor="email">ENDEREÇO DE E-MAIL</label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="exemplo@email.com"
            />
            <div>
              <FormDiv>
                <label htmlFor="age">IDADE</label>
                <Input name="age" id="age" type="number" />
              </FormDiv>
              <FormDiv>
                <label htmlFor="weight">PESO (em kg)</label>
                <Input name="weight" id="weight" type="number" />
              </FormDiv>
              <FormDivWithoutPadding>
                <label htmlFor="height">ALTURA</label>
                <Input name="height" id="height" type="number" />
              </FormDivWithoutPadding>
            </div>
          </FormControl>
        </Form>
      </Content>
    </Container>
  );
}

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
