export function getAllRequest(page = 1, name) {
  return {
    type: '@student/GET_ALL_REQUEST',
    payload: { page, name },
  };
}

export function getAllSuccess(students) {
  return {
    type: '@student/GET_ALL_SUCCESS',
    payload: { students },
  };
}

export function failure() {
  return {
    type: '@student/FAILURE',
  };
}
