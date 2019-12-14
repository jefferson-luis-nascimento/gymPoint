import React, { useState, useMemo } from 'react';
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
} from '~/styles/stylesGlobal';

import { formatPrice } from '~/util/format';
import { addRequest, updateRequest } from '~/store/modules/plan/actions';

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
  const dispatch = useDispatch();
  const [plan, setPlan] = useState(useSelector(state => state.plan.plan));
  const { id } = plan;
  const loading = useSelector(state => state.plan.loading);
  const newPlan = useSelector(state => state.plan.newPlan);

  const totalPrice = useMemo(() => {
    formatPrice(plan.duration * plan.price);
  }, [plan.duration, plan.price]);

  async function handleTitleChange(title) {
    console.tron.log(title);
    await setPlan({ ...plan, title });
    console.tron.log(plan);
  }

  function handleSubmit({ title, duration, price }) {
    if (newPlan) {
      dispatch(addRequest(title, duration, price));
    } else {
      dispatch(updateRequest(id, title, duration, price));
    }
  }

  function handleBack() {
    history.push('/plan');
  }

  return (
    <Container>
      <Content>
        <Form initialData={plan} schema={schema} onSubmit={handleSubmit}>
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
                  <span>{loading ? '...GRAVANDO' : 'SALVAR'}</span>
                </div>
              </ButtonRegister>
            </HeaderOptions>
          </Header>
          <FormControl>
            <label htmlFor="title">TÍTULO DO PLANO</label>
            <Input
              name="title"
              id="title"
              type="text"
              onChange={e => handleTitleChange(e.target.value)}
            />
            <div>
              <FormDiv>
                <label htmlFor="duration">DURAÇÃO (em meses)</label>
                <Input
                  name="duration"
                  id="duration"
                  type="text"
                  onChange={e => setPlan({ ...plan, duration: e.target.value })}
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="price">PREÇO MENSAL</label>
                <Input
                  name="price"
                  id="price"
                  type="text"
                  onChange={e => setPlan({ ...plan, price: e.target.value })}
                />
              </FormDiv>
              <FormDivWithoutPadding>
                <label htmlFor="totalPrice">PREÇO TOTAL</label>
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
