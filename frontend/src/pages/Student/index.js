/* eslint-disable no-alert */
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
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
import { loadRequest, deleteRequest } from '~/store/modules/student/actions';

export default function Student({ history }) {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [students, setStudents] = useState([]);
  const dispatch = useDispatch();

  const studentsCount = useMemo(() => {
    return students.length;
  }, [students]);

  async function loadStudents() {
    const response = await api.get('/students', { params: { name, page } });

    setStudents(response.data);
  }

  useEffect(() => {
    setPage(1);
    loadStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRegister() {
    history.push('/student-register');
  }

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleEdit(id) {
    console.tron.log(id);
    dispatch(loadRequest(id));
  }

  async function handleDelete(id) {
    const answer = window.confirm('Deseja realmente excluir esse aluno?');

    if (answer) {
      await dispatch(deleteRequest(id));
      setPage(1);
      loadStudents();
    }
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
                    <BlueButton onClick={() => handleEdit(student.id)}>
                      editar
                    </BlueButton>
                  </td>
                  <td>
                    <RedButton onClick={() => handleDelete(student.id)}>
                      apagar
                    </RedButton>
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
