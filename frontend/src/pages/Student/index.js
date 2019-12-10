import React from 'react';
import { MdAdd } from 'react-icons/md';

import {
  Container,
  Content,
  HeaderLabel,
  Table,
  BlueButton,
  RedButton,
} from '~/styles/stylesGlobal';
import {
  Header,
  Filter,
  ButtonFilterRegister,
  FilterInput,
  Search,
} from './styles';

export default function Student() {
  return (
    <Container>
      <Content>
        <Header>
          <HeaderLabel>Gerenciando Alunos</HeaderLabel>
          <Filter>
            <ButtonFilterRegister>
              <div>
                <MdAdd size={20} color="#fff" />
                <span>CADASTRAR</span>
              </div>
            </ButtonFilterRegister>
            <FilterInput>
              <input type="text" placeholder="Buscar Aluno" />
              <Search />
            </FilterInput>
          </Filter>
        </Header>
        <Table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
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
