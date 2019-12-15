import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { addMonths, format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

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
import {
  loadAllRequest as loadPlans,
  loadRequest as loadPlan,
} from '~/store/modules/plan/actions';
import { addRequest, updateRequest } from '~/store/modules/enrollment/actions';

import { formatPrice } from '~/util/format';

const schema = Yup.object().shape({
  student_id: Yup.number().required('Aluno é obrigatório'),
  plan_id: Yup.number().required('Plano é obrigatório'),
  start_date: Yup.date('Data início inválida').required(),
});

export default function Register({ history }) {
  const dispatch = useDispatch();
  const students = useSelector(state => state.student.students);
  const plans = useSelector(state => state.plan.plans);
  const plan = useSelector(state => state.plan.plan);
  const enrollment = useSelector(state => state.enrollment.enrollment);
  const { id } = enrollment;
  const loading = useSelector(state => state.enrollment.loading);
  const newEnrollment = useSelector(state => state.enrollment.newEnrollment);

  const [startDate, setStartDate] = useState(enrollment.start_date);

  const endDate = useMemo(() => {
    let date = format(new Date(), 'P', { locale: pt });

    try {
      console.tron.log(
        date,
        startDate,
        plan.duration,
        addMonths(startDate, plan.duration)
      );
      date = format(addMonths(parseISO(startDate), plan.duration), 'P', {
        locale: pt,
      });
    } catch (error) {
      console.tron.error('Erro setando data', error);
    }

    return date;
  }, [plan.duration, startDate]);

  const totalPrice = useMemo(() => {
    console.tron.log(plan);
    return formatPrice(plan.totalPrice || enrollment.plan.totalPrice);
  }, [enrollment.plan.totalPrice, plan]);

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

  function handleSelect(e) {
    dispatch(loadPlan(e.target.value, false));
  }

  function handleBack() {
    history.push('/enrollment');
  }

  return (
    <Container>
      <Content>
        <Form initialData={enrollment} schema={schema} onSubmit={handleSubmit}>
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
                  onChange={e => handleSelect(e)}
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="start_date">DATA INÍCIO</label>
                <Input
                  value={moment(startDate).format('YYYY-MM-DD')}
                  name="start_date"
                  id="start_date"
                  type="date"
                  onChange={e => setStartDate(e.target.value)}
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="end_date">DATA TÉRMINO</label>
                <InputReadOnly
                  value={endDate}
                  name="end_date"
                  id="end_date"
                  readOnly
                />
              </FormDiv>
              <FormDivWithoutPadding>
                <label htmlFor="totalPrice">VALOR FINAL</label>
                <InputReadOnly
                  value={totalPrice}
                  name="totalPrice"
                  id="totalPrice"
                  readOnly
                />
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
