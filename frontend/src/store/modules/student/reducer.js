import produce from 'immer';
import history from '~/services/history';

const studentDefault = {
  id: 0,
  name: '',
  email: '',
  birthday: new Date(),
  weight: 0,
  height: 0,
  age: 0,
};

const INITIAL_STATE = {
  student: studentDefault,
  loading: false,
  newStudent: true,
  students: [],
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
        draft.student = studentDefault;
        draft.loading = false;
        draft.newStudent = true;
        break;
      }
      case '@student/LOAD_REQUEST': {
        draft.student = studentDefault;
        draft.loading = true;
        draft.newStudent = false;
        break;
      }
      case '@student/LOAD_SUCCESS': {
        draft.student = action.payload.student;
        draft.loading = false;
        draft.newStudent = false;
        break;
      }
      case '@student/DELETE_REQUEST': {
        draft.student = studentDefault;
        draft.loading = true;
        draft.newStudent = false;
        break;
      }
      case '@student/DELETE_SUCCESS': {
        draft.student = studentDefault;
        draft.loading = false;
        draft.newStudent = true;
        break;
      }
      case '@student/LOAD_ALL_REQUEST': {
        draft.student = studentDefault;
        draft.loading = false;
        draft.newStudent = true;
        break;
      }
      case '@student/LOAD_ALL_SUCCESS': {
        draft.student = studentDefault;
        draft.students = action.payload.students;
        draft.loading = false;
        draft.newStudent = true;
        break;
      }
      case '@student/CANCEL': {
        draft.student = studentDefault;
        draft.loading = false;
        draft.newStudent = true;
        history.push('/student');
        break;
      }
      case '@student/FAILURE': {
        draft.loading = false;
        draft.newStudent = true;
        break;
      }
      default:
    }
  });
}
