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
      </Content>
    </Container>
  );
}
