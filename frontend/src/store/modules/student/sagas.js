import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { differenceInCalendarYears } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';

import { addSuccess, failure } from './actions';

export function* add({ payload }) {
  try {
    const { name, email, birthday, weight, height, user_id } = payload;

    const student = {
      name,
      email,
      birthday,
      weight,
      height,
      user_id,
    };

    yield call(api.post, 'students', student);

    yield put(
      addSuccess({
        ...student,
        age: differenceInCalendarYears(new Date(), birthday),
      })
    );

    toast.success('Aluno gravado com sucesso!');
    history.push('/student');
  } catch (error) {
    toast.error('Não foi possível adicionar o aluno');
    yield put(failure());
  }
}

export default all([takeLatest('@student/ADD_REQUEST', add)]);
