import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
// import history from '~/services/history';

import { getAllSuccess, failure } from './actions';

export function* getAll({ payload }) {
  try {
    const { page, name } = payload;

    const response = yield call(api.get, 'students', { query: { page, name } });

    const students = response.data;

    yield put(getAllSuccess(students));
  } catch (error) {
    toast.error('Não foi possível carregar os alunos');
    yield put(failure());
  }
}

export default all([takeLatest('@student/GET_ALL_REQUEST', getAll)]);
