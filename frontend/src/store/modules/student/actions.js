export function addRequest(name, email, birthday, weight, height, user_id) {
  return {
    type: '@student/ADD_REQUEST',
    payload: { name, email, birthday, weight, height, user_id },
  };
}

export function addSuccess(students) {
  return {
    type: '@student/ADD_SUCCESS',
    payload: { students },
  };
}

export function failure() {
  return {
    type: '@student/FAILURE',
  };
}
