import React from 'react';
import { MdAdd, MdCheckCircle } from 'react-icons/md';

import {
  Container,
  Content,
  HeaderLabel,
  Table,
  BlueButton,
  RedButton,
} from '~/styles/stylesGlobal';
import { Header, Filter, ButtonFilterRegister } from './styles';

export default function Enrollment() {
  return (
    <Container>
      <Content>
        <Header>
          <HeaderLabel>Gerenciando matrículas</HeaderLabel>
          <Filter>
            <ButtonFilterRegister>
              <div>
                <MdAdd size={20} color="#fff" />
                <span>CADASTRAR</span>
              </div>
            </ButtonFilterRegister>
          </Filter>
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
                <MdCheckCircle size={20} color="#0f0" />
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
                <MdCheckCircle size={20} color="#0f0" />
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
                <MdCheckCircle size={20} color="#0f0" />
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
