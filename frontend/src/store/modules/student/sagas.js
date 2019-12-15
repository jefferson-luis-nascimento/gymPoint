import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { differenceInCalendarYears } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';

import {
  addSuccess,
  updateSuccess,
  failure,
  loadSuccess,
  deleteSuccess,
  loadAllSuccess,
  loadAllRequest,
} from './actions';

export function* add({ payload }) {
  try {
    const { name, email, birthday, weight, height, user_id } = payload.student;

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
    console.tron.error(error);
    toast.error('Não foi possível adicionar o aluno');
    yield put(failure());
  }
}

export function* update({ payload }) {
  try {
    const {
      id,
      name,
      email,
      birthday,
      weight,
      height,
      user_id,
    } = payload.student;

    const student = {
      name,
      email,
      birthday,
      weight,
      height,
      user_id,
    };

    yield call(api.put, `/students/${id}`, student);

    yield put(
      updateSuccess({
        id,
        ...student,
        age: differenceInCalendarYears(new Date(), birthday),
      })
    );

    toast.success('Aluno atualizado com sucesso!');
    history.push('/student');
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível atualizar o aluno');
    yield put(failure());
  }
}

export function* load({ payload }) {
  try {
    const response = yield call(api.get, `/students/${payload.student.id}`);

    const student = response.data;

    yield put(
      loadSuccess({
        ...student,
        age: differenceInCalendarYears(new Date(), student.birthday),
      })
    );

    history.push('/student-register');
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível carregar o aluno');
    yield put(failure());
  }
}

export function* deleteOne({ payload }) {
  try {
    yield call(api.delete, `/students/${payload.student.id}`);

    yield put(deleteSuccess());
    toast.success('Aluno excluído com sucesso!');
    yield put(loadAllRequest('', 1));
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível excluir o aluno');
    yield put(failure());
  }
}

export function* loadAll({ payload }) {
  try {
    const { name, page } = payload;

    const response = yield call(api.get, '/students', {
      params: { name, page },
    });

    const students = response.data;

    yield put(loadAllSuccess(students));
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível carregar os alunos');
    yield put(failure());
  }
}

export default all([
  takeLatest('@student/ADD_REQUEST', add),
  takeLatest('@student/UPDATE_REQUEST', update),
  takeLatest('@student/LOAD_REQUEST', load),
  takeLatest('@student/DELETE_REQUEST', deleteOne),
  takeLatest('@student/LOAD_ALL_REQUEST', loadAll),
]);
