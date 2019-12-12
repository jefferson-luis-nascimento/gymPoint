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
  InputReadOnly,
} from '~/styles/stylesGlobal';

const schema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Título do plano tem que ter no mínimo 2 caracteres')
    .required('Título do plano é obrigatório'),
  duration: Yup.number('Duração inválida')
    .integer('Duração inválida')
    .positive('Duração não pode ser negativa')
    .max(150, 'Duração inválida')
    .required('Duração é obrigatório'),
  price: Yup.number('Preço inválido')
    .positive('Preço não pode ser negativo')
    .required('Preço é obrigatório'),
});

export default function Register({ history }) {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  function handleBack() {
    history.push('/plan');
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Header>
            <HeaderLabel>Cadastro de plano</HeaderLabel>
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
            <label htmlFor="title">TÍTULO DO PLANO</label>
            <Input name="title" id="title" type="text" />
            <div>
              <FormDiv>
                <label htmlFor="duration">DURAÇÃO (em meses)</label>
                <Input name="duration" id="duration" type="number" />
              </FormDiv>
              <FormDiv>
                <label htmlFor="price">PREÇO MENSAL</label>
                <Input name="price" id="price" type="number" />
              </FormDiv>
              <FormDivWithoutPadding>
                <label htmlFor="totalPrice">PREÇO TOTAL</label>
                <InputReadOnly name="totalPrice" id="totalPrice" readOnly />
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
