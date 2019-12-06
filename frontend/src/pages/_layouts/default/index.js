import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Header>
      <Container>{children}</Container>
    </Header>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
