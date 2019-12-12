import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import logo from '~/assets/images/logo-pequeno.svg';
import { Container, Content, Profile } from './styles';
import { RedButton } from '~/styles/stylesGlobal';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="" />
          <Link id="logo" to="/dashboard">
            GYMPOINT
          </Link>
          <div>
            <NavLink
              to="/student"
              isActive={() => true}
              activeClassName="linkactive"
            >
              ALUNOS
            </NavLink>
            <NavLink to="/plan" activeClassName="linkactive">
              PLANOS
            </NavLink>
            <NavLink to="/enrollment" activeClassName="linkactive">
              MATRICULAS
            </NavLink>
            <NavLink to="/helpOrder" activeClassName="linkactive">
              PEDIDOS DE AUXÍLIO
            </NavLink>
          </div>
          <aside>
            <Profile>
              <div>
                <strong>Jefferson Luís Nascimento</strong>
                <RedButton onClick={handleSignOut}>Sair do Sistema</RedButton>
              </div>
            </Profile>
          </aside>
        </nav>
      </Content>
    </Container>
  );
}
