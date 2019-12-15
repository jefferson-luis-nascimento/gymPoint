import produce from 'immer';

const helpOrderDefault = {
  id: 0,
  sudent_id: 0,
  question: '',
  answer: '',
  student: {
    name: '',
    email: '',
    birthday: new Date(),
    age: 0,
  },
};

const INITIAL_STATE = {
  helpOrder: helpOrderDefault,
  loading: false,
  closeModal: false,
  helpOrders: [],
};

export default function helpOrder(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@helpOrder/ANSWER_REQUEST': {
        draft.helpOrder = helpOrderDefault;
        draft.loading = true;
        draft.closeModal = false;
        break;
      }
      case '@helpOrder/ANSWER_SUCCESS': {
        draft.helpOrder = action.payload.helpOrder;
        draft.loading = false;
        draft.closeModal = true;
        break;
      }
      case '@helpOrder/LOAD_REQUEST': {
        draft.helpOrder = helpOrderDefault;
        draft.loading = true;
        break;
      }
      case '@helpOrder/LOAD_SUCCESS': {
        draft.helpOrder = action.payload.helpOrder;
        draft.loading = false;
        break;
      }
      case '@helpOrder/LOAD_ALL_REQUEST': {
        draft.helpOrder = helpOrderDefault;
        draft.loading = false;
        draft.newhelpOrder = true;
        break;
      }
      case '@helpOrder/LOAD_ALL_SUCCESS': {
        draft.helpOrder = helpOrderDefault;
        draft.helpOrders = action.payload.helpOrders;
        draft.loading = false;
        draft.newhelpOrder = true;
        break;
      }
      case '@helpOrder/FAILURE': {
        draft.loading = false;
        draft.newhelpOrder = true;
        break;
      }
      default:
    }
  });
}
