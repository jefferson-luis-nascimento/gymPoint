import produce from 'immer';

const INITIAL_STATE = {
  student: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.student = action.payload.student;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.student = null;
        break;
      }
      default:
    }
  });
}
