import { Alert } from 'react-native';

import { takeLatest, call, put, all } from 'redux-saga/effects';
import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    console.tron.log('Saga', id);

    const response = yield call(api.get, `sessions/${id}/students`);

    const student = response.data;

    console.tron.log('Saga', student);

    if (!student) {
      Alert.alert('Erro no login', 'Aluno não encontrado.');
      return;
    }

    yield put(signInSuccess(student));
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados.'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
