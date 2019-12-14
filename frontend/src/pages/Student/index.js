/* eslint-disable no-alert */
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import {
  loadRequest,
  deleteRequest,
  loadAllRequest,
} from '~/store/modules/student/actions';

export default function Student({ history }) {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const students = useSelector(state => state.student.students);
  const dispatch = useDispatch();

  const studentsCount = useMemo(() => {
    return students.length;
  }, [students]);

  useEffect(() => {
    setPage(1);
    dispatch(loadAllRequest(name, page));
  }, [dispatch, name, page]);

  function handleRegister() {
    history.push('/student-register');
  }

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleEdit(id) {
    dispatch(loadRequest(id));
  }

  async function handleDelete(id) {
    const answer = window.confirm('Deseja realmente excluir esse aluno?');

    if (answer) {
      dispatch(deleteRequest(id));
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
