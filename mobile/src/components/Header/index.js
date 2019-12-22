import React from 'react';

import logo from '~/assets/images/logo-pequeno.png';
import { Container, Logo, LogoText } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <LogoText>GYMPOINT</LogoText>
    </Container>
  );
}
