import produce from 'immer';
import history from '~/services/history';

const enrollmentDefault = {
  id: 0,
  start_date: new Date(),
  end_date: new Date(),
  price: 0,
  sudent_id: 0,
  plan_id: 0,
  active: false,
  student: {
    name: '',
    email: '',
    age: 0,
  },
  plan: {
    title: '',
    duration: 0,
    price: 0,
  },
};

const INITIAL_STATE = {
  enrollment: enrollmentDefault,
  loading: false,
  newEnrollment: true,
  enrollments: [],
};

export default function enrollment(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enrollment/ADD_REQUEST': {
        draft.loading = true;
        draft.newEnrollment = true;
        break;
      }
      case '@enrollment/ADD_SUCCESS': {
        draft.enrollment = enrollmentDefault;
        draft.loading = false;
        draft.newEnrollment = true;
        break;
      }
      case '@enrollment/LOAD_REQUEST': {
        draft.enrollment = enrollmentDefault;
        draft.loading = true;
        draft.newEnrollment = false;
        break;
      }
      case '@enrollment/LOAD_SUCCESS': {
        draft.enrollment = action.payload.enrollment;
        draft.loading = false;
        draft.newEnrollment = false;
        break;
      }
      case '@enrollment/DELETE_REQUEST': {
        draft.enrollment = enrollmentDefault;
        draft.loading = true;
        draft.newEnrollment = false;
        break;
      }
      case '@enrollment/DELETE_SUCCESS': {
        draft.enrollment = enrollmentDefault;
        draft.loading = false;
        draft.newEnrollment = true;
        break;
      }
      case '@enrollment/LOAD_ALL_REQUEST': {
        draft.enrollment = enrollmentDefault;
        draft.loading = false;
        draft.newEnrollment = true;
        break;
      }
      case '@enrollment/LOAD_ALL_SUCCESS': {
        draft.enrollment = enrollmentDefault;
        draft.enrollments = action.payload.enrollments;
        draft.loading = false;
        draft.newEnrollment = true;
        break;
      }
      case '@enrollment/CANCEL': {
        draft.enrollment = enrollmentDefault;
        draft.loading = false;
        draft.newEnrollment = true;
        history.push('/enrollment');
        break;
      }
      case '@enrollment/FAILURE': {
        draft.loading = false;
        draft.newEnrollment = true;
        break;
      }
      default:
    }
  });
}
