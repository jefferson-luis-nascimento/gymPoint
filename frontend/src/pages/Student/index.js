import React, { useState, useEffect, useMemo } from 'react';
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
  EmptyList,
} from '~/styles/stylesGlobal';
import { FilterInput, Search } from './styles';

import api from '~/services/api';

export default function Student({ history }) {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [students, setStudents] = useState([]);

  const studentsCount = useMemo(() => {
    return students.length;
  }, [students]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students', { params: { name, page } });

      console.tron.log(response, name, page);
      setStudents(response.data);
    }

    loadStudents();
  }, [name, page]);

  function handleRegister() {
    history.push('/student-register');
  }

  function handleInputChange(e) {
    setName(e.target.value);
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
              <input
                onChange={handleInputChange}
                type="text"
                placeholder="Buscar Aluno"
              />
              <Search />
            </FilterInput>
          </HeaderOptions>
        </Header>
        {studentsCount > 0 ? (
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
              {students.map(student => (
                <tr key={student.id}>
                  <td>
                    <strong>{student.name}</strong>
                  </td>
                  <td>
                    <strong>{student.email}</strong>
                  </td>
                  <td>
                    <strong>{student.age}</strong>
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
          <EmptyList>Não existem alunos cadastrados</EmptyList>
        )}
      </Content>
    </Container>
  );
}

Student.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
