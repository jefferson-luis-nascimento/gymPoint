import React from 'react';
import { MdAdd } from 'react-icons/md';
import PropTypes from 'prop-types';

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
import { FilterInput, Search } from './styles';

export default function Student({ history }) {
  function handleRegister() {
    history.push('/student-register');
  }

  return (
    <Container>
      <Content>
        <Header>
          <HeaderLabel>Gerenciando Alunos</HeaderLabel>
          <HeaderOptions>
            <ButtonRegister onClick={handleRegister}>
              <div>
                <MdAdd size={20} color="#fff" />
                <span>CADASTRAR</span>
              </div>
            </ButtonRegister>
            <FilterInput>
              <input type="text" placeholder="Buscar Aluno" />
              <Search />
            </FilterInput>
          </HeaderOptions>
        </Header>
        <Table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
              <th> </th>
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
                <strong>exemplo@email.com</strong>
              </td>
              <td>
                <strong>20</strong>
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
                <strong>exemplo@email.com</strong>
              </td>
              <td>
                <strong>20</strong>
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
                <strong>exemplo@email.com</strong>
              </td>
              <td>
                <strong>20</strong>
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

Student.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
