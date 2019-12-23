import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { parseISO } from 'date-fns';
import formatRelative from 'date-fns/formatDistance';
import pt from 'date-fns/locale/pt';

import Header from '~/components/Header';

import {
  Container,
  Content,
  NewHelpOrderButton,
  HelpOrderHeader,
  HelpOrdersList,
  HelpOrderLeft,
  HelpOrderLeftText,
  HelpOrderRightText,
  HelpOrderQuestion,
  EmptyList,
} from './styles';

import api from '~/services/api';

const data = [
  {
    id: 1,
    student_id: 12,
    question:
      'Olá pessoal da academia, gostaria de saber se quando acordar devo ingerir batata doce e frango logo de primeira, preparar as marmitas e lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?',
    answer: null,
    answer_at: new Date(),
    withoutAnswer: true,
    dateFormatted: 'há 3 horas',
  },
  {
    id: 2,
    student_id: 12,
    question:
      'Olá pessoal da academia, gostaria de saber se quando acordar devo ingerir batata doce e frango logo de primeira, preparar as marmitas e lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?',
    answer: null,
    answer_at: new Date(),
    withoutAnswer: false,
    dateFormatted: 'há 2 dias',
  },
];

export default function HelpOrder({ navigation }) {
  const student = useSelector(state => state.student.student);

  const [helpOrders, setHelpOrders] = useState([]);

  const countHelpOrders = 0;

  /*
  const countHelpOrders = useMemo(() => {
    return !helpOrders ? 0 : helpOrders.length;
  }, [helpOrders]); */

  /*   useEffect(() => {
    console.tron.log(data);
    setHelpOrders(data);
  }, []); */

  async function handleSubmit() {
    console.tron.log('handleSubmit', data);
    navigation.navigate('NewHelpOrder');
  }

  return (
    <Container>
      <Header />
      <Content>
        <NewHelpOrderButton onPress={handleSubmit}>
          Novo pedido de auxílio
        </NewHelpOrderButton>
        {countHelpOrders > 0 ? (
          <HelpOrdersList
            data={helpOrders}
            keyExtractor={item => String(item.id)}
            renderItem={({ item: helpOrder }) => (
              <HelpOrder>
                <HelpOrderHeader>
                  <HelpOrderLeft>
                    <Icon
                      name="check-circle"
                      size={16}
                      color={helpOrder.withoutAnswer ? '#999' : '#42cb59'}
                    />
                    <HelpOrderLeftText withoutAnswer={helpOrder.withoutAnswer}>
                      {helpOrder.withoutAnswer ? 'Sem resposta' : 'Respondido'}
                    </HelpOrderLeftText>
                  </HelpOrderLeft>
                  <HelpOrderRightText>
                    {helpOrder.dateFormatted}
                  </HelpOrderRightText>
                </HelpOrderHeader>
                <HelpOrderQuestion>{helpOrder.question}</HelpOrderQuestion>
              </HelpOrder>
            )}
          />
        ) : (
          <EmptyList>
            {student.name}, você ainda não fez nenhum pedido de auxílio!
          </EmptyList>
        )}
      </Content>
    </Container>
  );
}

HelpOrder.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="comment-question" size={20} color={tintColor} />
  ),
};
