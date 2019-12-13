import produce from 'immer';
import history from '~/services/history';

const INITIAL_STATE = {
  student: {
    id: 0,
    name: '',
    email: '',
    birthday: new Date(),
    weight: 0,
    height: 0,
    age: 0,
  },
  loading: false,
  newStudent: true,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/ADD_REQUEST': {
        draft.loading = true;
        draft.newStudent = true;
        break;
      }
      case '@student/ADD_SUCCESS': {
        draft = INITIAL_STATE;
        break;
      }
      case '@student/LOAD_REQUEST': {
        draft = INITIAL_STATE;
        break;
      }
      case '@student/LOAD_SUCCESS': {
        draft.student = action.payload.student;
        draft.loading = false;
        draft.newStudent = false;
        break;
      }
      case '@student/CANCEL': {
        draft.student = {
          id: 0,
          name: '',
          email: '',
          birthday: new Date(),
          weight: 0,
          height: 0,
          age: 0,
        };
        draft.loading = false;
        draft.newStudent = true;
        history.push('/student');
        console.tron.log('entron no cancel', state, action, draft);
        break;
      }
      case '@student/FAILURE': {
        draft.loading = false;
        draft.new = true;
        break;
      }
      default:
    }
  });
}
