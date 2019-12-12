import React from 'react';
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
} from '~/styles/stylesGlobal';

export default function Plan({ history }) {
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
            <tr>
              <td>
                <strong>Start</strong>
              </td>
              <td>
                <strong>1 mês</strong>
              </td>
              <td>
                <strong>R$129,00</strong>
              </td>
              <td />
              <td>
                <BlueButton>editar</BlueButton>
              </td>
              <td>
                <RedButton>apagar</RedButton>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Gold</strong>
              </td>
              <td>
                <strong>3 mêses</strong>
              </td>
              <td>
                <strong>R$109,00</strong>
              </td>
              <td />
              <td>
                <BlueButton>editar</BlueButton>
              </td>
              <td>
                <RedButton>apagar</RedButton>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Diamond</strong>
              </td>
              <td>
                <strong>6 mêses</strong>
              </td>
              <td>
                <strong>R$89,00</strong>
              </td>
              <td />
              <td>
                <BlueButton>editar</BlueButton>
              </td>
              <td>
                <RedButton>apagar</RedButton>
              </td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}

Plan.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
