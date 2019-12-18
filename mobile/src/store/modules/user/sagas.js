import { Alert } from 'react-native';

import { takeLatest, put, call, all } from 'redux-saga/effects';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailiure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso.');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil. Confira seus dados'
    );
    yield put(updateProfileFailiure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
