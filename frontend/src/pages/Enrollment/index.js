import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  EmptyList,
} from '~/styles/stylesGlobal';

import {
  loadRequest,
  deleteRequest,
  loadAllRequest,
} from '~/store/modules/enrollment/actions';

export default function Enrollment({ history }) {
  const enrollments = useSelector(state => state.enrollment.enrollments);
  const dispatch = useDispatch();

  const enrollmentsCount = useMemo(() => {
    return enrollments.length;
  }, [enrollments]);

  useEffect(() => {
    dispatch(loadAllRequest());
  }, [dispatch]);

  function handleRegister() {
    history.push('/enrollment-register');
  }

  function handleEdit(id) {
    dispatch(loadRequest(id));
  }

  async function handleDelete(id) {
    const answer = window.confirm('Deseja realmente excluir essa matrícula?');

    if (answer) {
      dispatch(deleteRequest(id));
    }
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
        {enrollmentsCount > 0 ? (
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
              {enrollments.map(enrollment => (
                <tr>
                  <td>
                    <strong>{enrollment.student.name}</strong>
                  </td>
                  <td>
                    <strong>{enrollment.plan.title}</strong>
                  </td>
                  <td>
                    <strong>{enrollment.start_date}</strong>
                  </td>
                  <td>
                    <strong>{enrollment.end_date}</strong>
                  </td>
                  <td>
                    <MdCheckCircle
                      size={20}
                      color={enrollment.active ? '#42cb59' : '#ddd'}
                    />
                  </td>
                  <td />
                  <td>
                    <BlueButton onClick={() => handleEdit(enrollment.id)}>
                      editar
                    </BlueButton>
                  </td>
                  <td>
                    <RedButton onClick={() => handleDelete(enrollment.id)}>
                      apagar
                    </RedButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyList>Não existem matrículas cadastradas</EmptyList>
        )}
      </Content>
    </Container>
  );
}

Enrollment.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
