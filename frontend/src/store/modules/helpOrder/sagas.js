import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import history from '~/services/history';

import { failure, loadSuccess, loadAllSuccess, answerSuccess } from './actions';

function loadFormattedDate(helpOrder) {
  console.tron.log(helpOrder);
  return {
    ...helpOrder,
    startDateFormatted: format(parseISO(helpOrder.start_date), 'PP', {
      locale: pt,
    }),
    endDateFormatted: format(parseISO(helpOrder.end_date), 'PP', {
      locale: pt,
    }),
  };
}

export function* update({ payload }) {
  try {
    const { id, student_id, plan_id, start_date } = payload.helpOrder;

    const response = yield call(api.put, `/helpOrders/${id}`, {
      id,
      student_id,
      plan_id,
      start_date,
    });

    const helpOrder = loadFormattedDate(response.data);

    yield put(answerSuccess(helpOrder));

    toast.success('Matrícula atualizado com sucesso!');
    history.push('/helpOrder');
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível atualizar a Matrícula');
    yield put(failure());
  }
}

export function* load({ payload }) {
  try {
    const response = yield call(api.get, `/helpOrders/${payload.helpOrder.id}`);

    const helpOrder = loadFormattedDate(response.data);

    yield put(loadSuccess(helpOrder));

    history.push('/helpOrder-register');
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível carregar a Matrícula');
    yield put(failure());
  }
}

export function* loadAll() {
  try {
    const response = yield call(api.get, '/helpOrders');

    console.tron.log(response.data);

    const helpOrders = response.data.map(helpOrder =>
      loadFormattedDate(helpOrder)
    );

    console.tron.log(helpOrders);

    yield put(loadAllSuccess(helpOrders));
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível carregar as Matrículas');
    yield put(failure());
  }
}

export default all([
  takeLatest('@helpOrder/UPDATE_REQUEST', update),
  takeLatest('@helpOrder/LOAD_REQUEST', load),
  takeLatest('@helpOrder/LOAD_ALL_REQUEST', loadAll),
]);
