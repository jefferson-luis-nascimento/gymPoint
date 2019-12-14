import React, { useState, useEffect } from 'react';
import * as moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
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

import {
  addRequest,
  updateRequest,
  cancel,
} from '~/store/modules/student/actions';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nome tem que ter no mínimo 2 caracteres')
    .required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  birthday: Yup.date('Data de aniversário inválida').required(
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

export default function Register() {
  const user_id = useSelector(state => state.user.profile.user_id);
  const student = useSelector(state => state.student.student);
  const loading = useSelector(state => state.student.loading);
  const newStudent = useSelector(state => state.student.newStudent);
  const { id } = student;
  const dispatch = useDispatch();

  const [age, setAge] = useState(student.age);
  const [birthday, setBirthday] = useState(student.birthday);

  useEffect(() => {
    const value =
      differenceInCalendarYears(new Date(), parseISO(student.birthday)) || 0;
    setAge(value);
  }, [student.birthday]);

  async function handleSubmit({ name, email, weight, height }) {
    if (newStudent) {
      dispatch(addRequest(name, email, birthday, weight, height, user_id));
    } else {
      dispatch(
        updateRequest(id, name, email, birthday, weight, height, user_id)
      );
    }
  }

  function handleBack() {
    dispatch(cancel());
  }

  function handleChangebirthday(e) {
    const value =
      differenceInCalendarYears(new Date(), parseISO(e.target.value)) || 0;
    setAge(value);
    setBirthday(e.target.value);
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
                  <span>{loading ? '...GRAVANDO' : 'SALVAR'}</span>
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
                <label htmlFor="birthday">DATE DE NASCIMENTO</label>
                <Input
                  onChange={e => handleChangebirthday(e)}
                  name="birthday"
                  id="birthday"
                  type="date"
                  value={moment(birthday).format('YYYY-MM-DD')}
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
