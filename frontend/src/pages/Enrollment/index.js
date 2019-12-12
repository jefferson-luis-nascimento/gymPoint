import React from 'react';
import PropTypes from 'prop-types';
import { MdAdd, MdCheckCircle } from 'react-icons/md';

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

export default function Enrollment({ history }) {
  function handleRegister() {
    history.push('./enrollment-register');
  }
  return (
    <Container>
      <Content>
        <Header>
          <HeaderLabel>Gerenciando matrículas</HeaderLabel>
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
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Cha Ji-Hun</strong>
              </td>
              <td>
                <strong>Start</strong>
              </td>
              <td>
                <strong>30 de Abril de 2019</strong>
              </td>
              <td>
                <strong>30 de Maio de 2019</strong>
              </td>
              <td>
                <MdCheckCircle size={20} color="#42cb59" />
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
                <strong>Cha Ji-Hun</strong>
              </td>
              <td>
                <strong>Start</strong>
              </td>
              <td>
                <strong>30 de Abril de 2019</strong>
              </td>
              <td>
                <strong>30 de Maio de 2019</strong>
              </td>
              <td>
                <MdCheckCircle size={20} color="#42cb59" />
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
                <strong>Cha Ji-Hun</strong>
              </td>
              <td>
                <strong>Start</strong>
              </td>
              <td>
                <strong>30 de Abril de 2019</strong>
              </td>
              <td>
                <strong>30 de Maio de 2019</strong>
              </td>
              <td>
                <MdCheckCircle size={20} color="#ddd" />
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
                <strong>Cha Ji-Hun</strong>
              </td>
              <td>
                <strong>Start</strong>
              </td>
              <td>
                <strong>30 de Abril de 2019</strong>
              </td>
              <td>
                <strong>30 de Maio de 2019</strong>
              </td>
              <td>
                <MdCheckCircle size={20} color="#42cb59" />
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

Enrollment.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
