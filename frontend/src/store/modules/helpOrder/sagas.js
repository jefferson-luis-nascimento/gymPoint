import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { failure, loadSuccess, loadAllSuccess, answerSuccess } from './actions';

export function* update({ payload }) {
  try {
    const { id, answer } = payload.helpOrder;

    const response = yield call(api.put, `/help-orders/${id}/answer`, {
      id,
      answer,
    });

    const helpOrder = response.data;

    yield put(answerSuccess(helpOrder));

    toast.success('Pedido de auxílio respondido com sucesso!');
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível atualizar o Pedido de auxílio');
    yield put(failure());
  }
}

export function* load({ payload }) {
  try {
    const response = yield call(
      api.get,
      `/help-orders/${payload.helpOrder.id}`
    );

    const helpOrder = response.data;

    yield put(loadSuccess(helpOrder));

    history.push('/helpOrder-register');
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível carregar o Pedido de auxílio');
    yield put(failure());
  }
}

export function* loadAll() {
  try {
    const response = yield call(api.get, '/help-orders');

    const helpOrders = response.data;

    yield put(loadAllSuccess(helpOrders));
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível carregar os Pedido de auxílio');
    yield put(failure());
  }
}

export default all([
  takeLatest('@helpOrder/ANSWER_REQUEST', update),
  takeLatest('@helpOrder/LOAD_REQUEST', load),
  takeLatest('@helpOrder/LOAD_ALL_REQUEST', loadAll),
]);
