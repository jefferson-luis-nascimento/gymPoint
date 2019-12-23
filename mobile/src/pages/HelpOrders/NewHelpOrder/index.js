import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import api from '~/services/api';

import { Container, QuestionInput, SubmitButton } from './styles';

export default function NewHelpOrder({ navigation }) {
  const student = useSelector(state => state.student.student);

  const [question, setQuestion] = useState('');

  async function handleSubmit() {
    await api.post(`students/${student.id}/help-orders`, {
      student_id: student.id,
      question,
    });

    Alert.alert('GymPoint', 'Pedido enviado com sucesso.');
    navigation.navigate('HelpOrder');
  }

  return (
    <Container>
      <QuestionInput
        placeholder="Inclua seu pedido de auxílio"
        value={question}
        onChangeText={setQuestion}
      />
      <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
    </Container>
  );
}

NewHelpOrder.navigationOptions = ({ navigation }) => ({
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
