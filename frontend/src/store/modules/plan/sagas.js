import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { formatPrice } from '~/util/format';

import {
  addSuccess,
  failure,
  loadSuccess,
  deleteSuccess,
  loadAllSuccess,
  loadAllRequest,
} from './actions';

function loadFormattedPrice(plan) {
  return {
    ...plan,
    priceFormatted: formatPrice(plan.price),
    totalPriceFormatted: formatPrice(plan.totalPrice),
  };
}

function loadFormattedPrices({ data }) {
  return data.map(plan => loadFormattedPrice(plan));
}

export function* add({ payload }) {
  try {
    const { title, duration, price } = payload.plan;

    const response = yield call(api.post, 'plans', { title, duration, price });

    const plan = loadFormattedPrice(response.data);

    yield put(addSuccess(plan));

    toast.success('Plano gravado com sucesso!');
    history.push('/plan');
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível adicionar o Plano');
    yield put(failure());
  }
}

export function* update({ payload }) {
  try {
    const { id, title, duration, price } = payload.plan;

    const response = yield call(api.put, `/plans/${id}`, {
      id,
      title,
      duration,
      price,
    });

    const plan = loadFormattedPrice(response.data);

    yield put(addSuccess(plan));

    toast.success('Plano atualizado com sucesso!');
    history.push('/plan');
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível atualizar o Plano');
    yield put(failure());
  }
}

export function* load({ payload }) {
  try {
    const response = yield call(api.get, `/plans/${payload.plan.id}`);

    const plan = loadFormattedPrice(response.data);

    yield put(loadSuccess(plan));

    history.push('/plan-register');
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível carregar o Plano');
    yield put(failure());
  }
}

export function* deleteOne({ payload }) {
  try {
    yield call(api.delete, `/plans/${payload.plan.id}`);

    yield put(deleteSuccess());
    toast.success('Plano excluído com sucesso!');
    yield put(loadAllRequest());
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível excluir o Plano');
    yield put(failure());
  }
}

export function* loadAll() {
  try {
    const response = yield call(api.get, '/plans');

    const plans = loadFormattedPrices(response);

    yield put(loadAllSuccess(plans));
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível carregar os Planos');
    yield put(failure());
  }
}

export default all([
  takeLatest('@plan/ADD_REQUEST', add),
  takeLatest('@plan/UPDATE_REQUEST', update),
  takeLatest('@plan/LOAD_REQUEST', load),
  takeLatest('@plan/DELETE_REQUEST', deleteOne),
  takeLatest('@plan/LOAD_ALL_REQUEST', loadAll),
]);
