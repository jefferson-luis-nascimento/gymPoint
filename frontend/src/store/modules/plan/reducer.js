import produce from 'immer';
import history from '~/services/history';

const planDefault = {
  id: 0,
  title: '',
  duration: 0,
  price: 0,
  totalPrice: 0,
};

const INITIAL_STATE = {
  plan: planDefault,
  loading: false,
  newPlan: true,
  plans: [],
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/ADD_REQUEST': {
        draft.loading = true;
        draft.newPlan = true;
        break;
      }
      case '@plan/ADD_SUCCESS': {
        draft.plan = planDefault;
        draft.loading = false;
        draft.newPlan = true;
        break;
      }
      case '@plan/LOAD_REQUEST': {
        draft.plan = planDefault;
        draft.loading = true;
        draft.newPlan = false;
        break;
      }
      case '@plan/LOAD_SUCCESS': {
        draft.plan = action.payload.plan;
        draft.loading = false;
        draft.newPlan = false;
        break;
      }
      case '@plan/DELETE_REQUEST': {
        draft.plan = planDefault;
        draft.loading = true;
        draft.newPlan = false;
        break;
      }
      case '@plan/DELETE_SUCCESS': {
        draft.plan = planDefault;
        draft.loading = false;
        draft.newPlan = true;
        break;
      }
      case '@plan/LOAD_ALL_REQUEST': {
        draft.plan = planDefault;
        draft.loading = false;
        draft.newPlan = true;
        break;
      }
      case '@plan/LOAD_ALL_SUCCESS': {
        draft.plan = planDefault;
        draft.plans = action.payload.plans;
        draft.loading = false;
        draft.newPlan = true;
        break;
      }
      case '@plan/CANCEL': {
        draft.plan = planDefault;
        draft.loading = false;
        draft.newPlan = true;
        history.push('/plan');
        break;
      }
      case '@plan/FAILURE': {
        draft.loading = false;
        draft.newPlan = true;
        break;
      }
      default:
    }
  });
}
