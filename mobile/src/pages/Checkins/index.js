import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { parseISO } from 'date-fns';
import formatRelative from 'date-fns/formatDistance';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import {
  Container,
  Content,
  NewCheckinButton,
  CheckinsList,
  Checkin,
  Left,
  Right,
} from './styles';

import api from '~/services/api';

export default function Checkins({ navigation }) {
  const student = useSelector(state => state.student.student);

  const [checkins, setChekins] = useState([]);

  useEffect(() => {
    loadCheckins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [student.id]);

  async function loadCheckins() {
    const response = await api.get(`students/${student.id}/checkins`);
    setChekins(
      response.data.map(checkin => ({
        ...checkin,
        dateFormatted: formatRelative(
          parseISO(checkin.created_at),
          new Date(),
          {
            locale: pt,
            addSuffix: true,
          }
        ),
      }))
    );
  }

  async function handleSubmit() {
    try {
      const response = await api.post(`students/${student.id}/checkins`);
      console.tron.log(response);
      loadCheckins();
    } catch (error) {
      console.tron.error(error.code);
      Alert.alert('GymPOint', 'Limite de Check-ins alcançado');
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <NewCheckinButton onPress={handleSubmit}>
          Novo check-in
        </NewCheckinButton>
        <CheckinsList
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: checkin }) => (
            <Checkin>
              <Left>Check-in #{checkin.id}</Left>
              <Right>{checkin.dateFormatted}</Right>
            </Checkin>
          )}
        />
      </Content>
    </Container>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
