import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import {
  Container,
  Content,
  HelpOrderHeader,
  HelpOrderLeftText,
  HelpOrderRightText,
  HelpOrderText,
} from './styles';

export default function Answer({ navigation }) {
  console.tron.log(navigation);
  const helpOrder = navigation.getParam('helpOrder');

  console.tron.log(helpOrder);

  return (
    <Container>
      <Content>
        <HelpOrderHeader>
          <HelpOrderLeftText>PERGUNTA</HelpOrderLeftText>
          <HelpOrderRightText>{helpOrder.dateFormatted}</HelpOrderRightText>
        </HelpOrderHeader>
        <HelpOrderText>{helpOrder.question}</HelpOrderText>
        <HelpOrderLeftText>RESPOSTA</HelpOrderLeftText>
        <HelpOrderText>
          {helpOrder.answer ? helpOrder.answer : 'Sem resposta ainda'}
        </HelpOrderText>
      </Content>
    </Container>
  );
}

Answer.navigationOptions = ({ navigation }) => ({
  headerTitle: () => <Header />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('HelpOrder');
      }}
    >
      <Icon name="chevron-left" size={30} color="#000" />
    </TouchableOpacity>
  ),
});
