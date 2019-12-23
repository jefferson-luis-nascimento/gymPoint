import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { parseISO } from 'date-fns';
import formatRelative from 'date-fns/formatDistance';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '~/components/Header';
import {
  Container,
  Content,
  HelpOrderButton,
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

export default function HelpOrder({ navigation }) {
  const student = useSelector(state => state.student.student);

  const [helpOrders, setHelpOrders] = useState([]);

  const countHelpOrders = useMemo(() => helpOrders.length, [helpOrders]);

  useEffect(() => {
    async function loadHelpOrders(id) {
      try {
        const response = await api.get(`students/${id}/help-orders`);

        const helpOrderList = response.data.map(helpOrder => ({
          ...helpOrder,
          withoutAnswer: !helpOrder.answer,
          dateFormatted: formatRelative(
            parseISO(helpOrder.created_at),
            new Date(),
            {
              locale: pt,
              addSuffix: true,
            }
          ),
        }));

        setHelpOrders(helpOrderList);
      } catch (error) {
        console.tron.error(error);
      }
    }

    loadHelpOrders(student.id);
  }, [student]);

  function handleNewHelpOrder() {
    navigation.navigate('NewHelpOrder');
  }

  function handleViewAnswer(helpOrder) {
    navigation.navigate('Answer', { helpOrder });
  }

  return (
    <Container>
      <Header />
      <Content>
        <NewHelpOrderButton onPress={handleNewHelpOrder}>
          Novo pedido de auxílio
        </NewHelpOrderButton>
        {countHelpOrders > 0 ? (
          <HelpOrdersList
            data={helpOrders}
            keyExtractor={item => String(item.id)}
            renderItem={({ item: helpOrder }) => (
              <HelpOrderButton onPress={() => handleViewAnswer(helpOrder)}>
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
              </HelpOrderButton>
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
