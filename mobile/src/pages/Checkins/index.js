import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
// import { Container } from './styles';

export default function Checkins() {
  return (
    <>
      <Header />
      <View>
        <Text>Checkin</Text>
      </View>
    </>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
