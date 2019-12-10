import React from 'react';
import { MdAdd } from 'react-icons/md';

import {
  Container,
  Content,
  Header,
  Filter,
  ButtonFilterRegister,
  FilterInput,
  Search,
  StudentsTable,
  EditButton,
  DeleteButton,
} from './styles';

export default function Student() {
  return (
    <Container>
      <Content>
        <Header>
          <strong>Gerenciando Alunos</strong>
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
        <StudentsTable>
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
                <EditButton>editar</EditButton>
              </td>
              <td>
                <DeleteButton>apagar</DeleteButton>
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
                <EditButton>editar</EditButton>
              </td>
              <td>
                <DeleteButton>apagar</DeleteButton>
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
                <EditButton>editar</EditButton>
              </td>
              <td>
                <DeleteButton>apagar</DeleteButton>
              </td>
            </tr>
          </tbody>
        </StudentsTable>
      </Content>
    </Container>
  );
}
