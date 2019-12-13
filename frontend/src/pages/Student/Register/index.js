import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { parseISO, differenceInCalendarYears } from 'date-fns';

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
  InputReadOnly,
  FormDivWithoutPadding,
} from '~/styles/stylesGlobal';

import { addRequest } from '~/store/modules/student/actions';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nome tem que ter no mínimo 2 caracteres')
    .required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  birthDay: Yup.date('Data de aniversário inválida').required(
    'Data de aniversário é obrigatório'
  ),
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
  const user_id = useSelector(state => state.user.profile.user_id);
  const student = useSelector(state => state.student);
  const dispatch = useDispatch();

  const [age, setAge] = useState(student.age);

  async function handleSubmit({ name, email, birthDay, weight, height }) {
    dispatch(addRequest(name, email, birthDay, weight, height, user_id));
  }

  function handleBack() {
    history.push('/student');
  }

  function handleChangeBirthDay(e) {
    const value =
      differenceInCalendarYears(new Date(), parseISO(e.target.value)) || 0;
    setAge(value);
  }

  return (
    <Container>
      <Content>
        <Form initialData={student} schema={schema} onSubmit={handleSubmit}>
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
                  <span>{student.loading ? '...GRAVANDO' : 'SALVAR'}</span>
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
                <label htmlFor="birthDay">DATE DE NASCIMENTO</label>
                <Input
                  onChange={e => handleChangeBirthDay(e)}
                  name="birthDay"
                  id="birthDay"
                  type="date"
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="age">IDADE</label>
                <InputReadOnly
                  value={age}
                  name="age"
                  id="age"
                  type="text"
                  readOnly
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="weight">PESO (em kg)</label>
                <Input name="weight" id="weight" type="text" />
              </FormDiv>
              <FormDivWithoutPadding>
                <label htmlFor="height">ALTURA</label>
                <Input name="height" id="height" type="text" />
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
