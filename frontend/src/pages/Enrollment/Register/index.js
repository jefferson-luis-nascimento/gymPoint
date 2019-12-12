import React, { useState, useEffect } from 'react';
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
  SelectUnform,
} from '~/styles/stylesGlobal';

const schema = Yup.object().shape({
  student_id: Yup.number().required('Aluno é obrigatório'),
  plan_id: Yup.number().required('Plano é obrigatório'),
  start_date: Yup.date('Data início inválida').required(),
});

export default function Register({ history }) {
  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    setStudents([
      { id: 1, title: 'Jefferson Luis Nascimento' },
      { id: 2, title: 'Lucinéia Rosa da Silva' },
      { id: 3, title: 'Jessica Rosa da Silva' },
    ]);

    setPlans([
      { id: 1, title: 'Silver' },
      { id: 2, title: 'Gold' },
      { id: 3, title: 'Diamond' },
    ]);
  }, []);

  function handleSubmit(data) {
    console.tron.log(data);
  }

  function handleBack() {
    history.push('/enrollment');
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Header>
            <HeaderLabel>Cadastro de matrícula</HeaderLabel>
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
            <label htmlFor="student_id">ALUNO</label>
            <SelectUnform
              options={students}
              name="student_id"
              id="student_id"
              placeholder="Selecione o Aluno"
            />
            <div>
              <FormDiv>
                <label htmlFor="plan_id">PLANO</label>
                <SelectUnform
                  options={plans}
                  name="plan_id"
                  id="plan_id"
                  placeholder="Selecione o Plano"
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="start_date">DATA INÍCIO</label>
                <Input name="start_date" id="start_date" type="date" />
              </FormDiv>
              <FormDiv>
                <label htmlFor="endDate">DATA TÉRMINO</label>
                <InputReadOnly name="endDate" id="endDate" readOnly />
              </FormDiv>
              <FormDivWithoutPadding>
                <label htmlFor="price">VALOR FINAL</label>
                <InputReadOnly name="price" id="price" readOnly />
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
