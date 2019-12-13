import produce from 'immer';

const INITIAL_STATE = {
  name: '',
  email: '',
  birthDate: new Date(),
  weight: 0,
  height: 0,
  loading: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/ADD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/ADD_SUCCESS': {
        draft.loading = false;
        draft.student = action.payload.student;
        console.tron.warn(draft.student);
        break;
      }
      case '@student/FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
