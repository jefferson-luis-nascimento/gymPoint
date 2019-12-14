import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import { loadAllRequest as loadStudents } from '~/store/modules/student/actions';
import { loadAllRequest as loadPlans } from '~/store/modules/plan/actions';
import { addRequest, updateRequest } from '~/store/modules/enrollment/actions';

const schema = Yup.object().shape({
  student_id: Yup.number().required('Aluno é obrigatório'),
  plan_id: Yup.number().required('Plano é obrigatório'),
  start_date: Yup.date('Data início inválida').required(),
});

export default function Register({ history }) {
  const dispatch = useDispatch();
  const students = useSelector(state => state.student.students);
  const plans = useSelector(state => state.plan.plans);
  const enrollment = useSelector(state => state.enrollment.enrollment);
  const { id } = enrollment;
  const loading = useSelector(state => state.enrollment.loading);
  const newEnrollment = useSelector(state => state.enrollment.newEnrollment);

  const studentList = useMemo(() => {
    return students.map(student => ({
      id: student.id,
      title: student.name,
    }));
  }, [students]);

  useEffect(() => {
    dispatch(loadStudents());
    dispatch(loadPlans());
  }, [dispatch]);

  function handleSubmit({ student_id, plan_id, start_date }) {
    if (newEnrollment) {
      dispatch(addRequest(student_id, plan_id, start_date));
    } else {
      dispatch(updateRequest(id, student_id, plan_id, start_date));
    }
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
                  <span>{loading ? '...GRAVANDO' : 'SALVAR'}</span>
                </div>
              </ButtonRegister>
            </HeaderOptions>
          </Header>
          <FormControl>
            <label htmlFor="student_id">ALUNO</label>
            <SelectUnform
              options={studentList}
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
