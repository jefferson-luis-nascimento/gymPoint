import produce from 'immer';

const INITIAL_STATE = {
  page: 1,
  name: '',
  loading: false,
  students: null,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/GET_ALL_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/GET_ALL_SUCCESS': {
        draft.loading = false;
        draft.students = action.payload.students;
        console.tron.warn(draft.students);
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
