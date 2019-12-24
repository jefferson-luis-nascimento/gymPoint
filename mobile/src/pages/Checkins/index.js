import React, { useEffect, useState, useMemo } from 'react';
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
  EmptyList,
} from './styles';

import api from '~/services/api';

export default function Checkins() {
  const student = useSelector(state => state.student.student);

  const [checkins, setChekins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const countCheckin = useMemo(() => (!checkins ? 0 : checkins.length), [
    checkins,
  ]);

  const loadText = useMemo(() => {
    let text = `${student.name}, você ainda não fez nenhum check-in!`;

    if (err && !loading) {
      text = 'Ops, não conseguimos carregar seus check-ins.';
    }

    if (loading) {
      text = 'Carregando...';
    }

    return text;
  }, [err, loading, student.name]);

  async function loadCheckins() {
    try {
      setLoading(true);
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
    } catch (error) {
      setErr(true);
      console.tron.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCheckins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit() {
    try {
      await api.post(`students/${student.id}/checkins`);

      Alert.alert('GymPoint', 'Check-in realizado com sucesso!');

      loadCheckins();
    } catch (error) {
      console.tron.error(error);
      console.tron.error(error.response);
      console.tron.error(error.response);
      if (error.response && error.response.status === 401) {
        Alert.alert('GymPoint', 'Limite de Check-ins alcançado');
      } else {
        Alert.alert(
          'GymPoint',
          'Ops, ocorreu um problema ao realizar o check-in, tente novamente mais tarde.'
        );
      }
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <NewCheckinButton onPress={handleSubmit}>
          Novo check-in
        </NewCheckinButton>
        {countCheckin > 0 ? (
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
        ) : (
          <EmptyList>{loadText}</EmptyList>
        )}
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
