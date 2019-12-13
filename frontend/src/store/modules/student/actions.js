export function addRequest(name, email, birthday, weight, height, user_id) {
  return {
    type: '@student/ADD_REQUEST',
    payload: { name, email, birthday, weight, height, user_id },
  };
}

export function addSuccess(student) {
  return {
    type: '@student/ADD_SUCCESS',
    payload: { student },
  };
}

export function loadRequest(id) {
  return {
    type: '@student/LOAD_REQUEST',
    payload: { id },
  };
}

export function loadSuccess(student) {
  return {
    type: '@student/LOAD_SUCCESS',
    payload: { student },
  };
}

export function failure() {
  return {
    type: '@student/FAILURE',
  };
}
