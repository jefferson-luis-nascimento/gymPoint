import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import history from '~/services/history';

import {
  addSuccess,
  failure,
  loadSuccess,
  deleteSuccess,
  loadAllSuccess,
  loadAllRequest,
} from './actions';

function loadFormattedDate(enrollment) {
  console.tron.log(enrollment);
  return {
    ...enrollment,
    startDateFormatted: format(parseISO(enrollment.start_date), 'PP', {
      locale: pt,
    }),
    endDateFormatted: format(parseISO(enrollment.end_date), 'PP', {
      locale: pt,
    }),
  };
}

export function* add({ payload }) {
  try {
    const { student_id, plan_id, start_date } = payload.enrollment;

    const response = yield call(api.post, 'enrollments', {
      student_id,
      plan_id,
      start_date,
    });

    const enrollment = loadFormattedDate(response.data);

    yield put(addSuccess(enrollment));

    toast.success('Matrícula gravado com sucesso!');
    history.push('/enrollment');
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível adicionar o Matrícula');
    yield put(failure());
  }
}

export function* update({ payload }) {
  try {
    const { id, student_id, plan_id, start_date } = payload.enrollment;

    const response = yield call(api.put, `/enrollments/${id}`, {
      id,
      student_id,
      plan_id,
      start_date,
    });

    const enrollment = loadFormattedDate(response.data);

    yield put(addSuccess(enrollment));

    toast.success('Matrícula atualizado com sucesso!');
    history.push('/enrollment');
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível atualizar a Matrícula');
    yield put(failure());
  }
}

export function* load({ payload }) {
  try {
    const response = yield call(
      api.get,
      `/enrollments/${payload.enrollment.id}`
    );

    const enrollment = loadFormattedDate(response.data);

    yield put(loadSuccess(enrollment));

    history.push('/enrollment-register');
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível carregar a Matrícula');
    yield put(failure());
  }
}

export function* deleteOne({ payload }) {
  try {
    yield call(api.delete, `/enrollments/${payload.enrollment.id}`);

    yield put(deleteSuccess());
    toast.success('Matrícula excluído com sucesso!');
    yield put(loadAllRequest('', 1));
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível excluir a Matrícula');
    yield put(failure());
  }
}

export function* loadAll() {
  try {
    const response = yield call(api.get, '/enrollments');

    console.tron.log(response.data);

    const enrollments = response.data.map(enrollment =>
      loadFormattedDate(enrollment)
    );

    console.tron.log(enrollments);

    yield put(loadAllSuccess(enrollments));
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível carregar as Matrículas');
    yield put(failure());
  }
}

export default all([
  takeLatest('@enrollment/ADD_REQUEST', add),
  takeLatest('@enrollment/UPDATE_REQUEST', update),
  takeLatest('@enrollment/LOAD_REQUEST', load),
  takeLatest('@enrollment/DELETE_REQUEST', deleteOne),
  takeLatest('@enrollment/LOAD_ALL_REQUEST', loadAll),
]);
