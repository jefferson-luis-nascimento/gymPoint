import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import {
  Container,
  Content,
  HeaderLabel,
  Table,
  BlueButton,
  RedButton,
  Header,
  HeaderOptions,
  ButtonRegister,
  EmptyList,
} from '~/styles/stylesGlobal';

import { loadAllRequest } from '~/store/modules/plan/actions';

export default function Plan({ history }) {
  const dispatch = useDispatch();
  const plans = useSelector(state => state.plan.plans);

  useEffect(() => {
    dispatch(loadAllRequest());
  }, [dispatch]);

  const plansCount = useMemo(() => {
    return plans.length;
  }, [plans]);

  function handleRegister() {
    history.push('./plan-register');
  }

  return (
    <Container>
      <Content>
        <Header>
          <HeaderLabel>Gerenciando planos</HeaderLabel>
          <HeaderOptions>
            <ButtonRegister onClick={handleRegister}>
              <div>
                <MdAdd size={20} color="#fff" />
                <span>CADASTRAR</span>
              </div>
            </ButtonRegister>
          </HeaderOptions>
        </Header>
        {plansCount > 0 ? (
          <Table>
            <thead>
              <tr>
                <th>TÍTULO</th>
                <th>DURAÇÃO</th>
                <th>VALOR p/ MÊS</th>
                <th> </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {plans.map(plan => (
                <tr>
                  <td>
                    <strong>{plan.title}</strong>
                  </td>
                  <td>
                    <strong>
                      {plan.duration === 1 ? '1 mês' : `${plan.duration} meses`}
                    </strong>
                  </td>
                  <td>
                    <strong>{plan.priceFormatted}</strong>
                  </td>
                  <td />
                  <td>
                    <BlueButton>editar</BlueButton>
                  </td>
                  <td>
                    <RedButton>apagar</RedButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyList>Não existem planos cadastrados</EmptyList>
        )}
      </Content>
    </Container>
  );
}

Plan.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
