import React from 'react';

import {
  Container,
  Content,
  HeaderLabel,
  Table,
  BlueButton,
} from '~/styles/stylesGlobal';

export default function HelpOrder() {
  return (
    <Container>
      <Content>
        <HeaderLabel>Pedidos de Auxílio</HeaderLabel>
        <Table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Lennert Sebastian</strong>
              </td>
              <td>
                <BlueButton>responder</BlueButton>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Lennert Sebastian</strong>
              </td>
              <td>
                <BlueButton>responder</BlueButton>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Lennert Sebastian</strong>
              </td>
              <td>
                <BlueButton>responder</BlueButton>
              </td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
