export function addRequest(name, email, birthday, weight, height, user_id) {
  return {
    type: '@student/ADD_REQUEST',
    payload: { student: { name, email, birthday, weight, height, user_id } },
  };
}

export function addSuccess(student) {
  return {
    type: '@student/ADD_SUCCESS',
    payload: { student },
  };
}

export function loadRequest(id) {
  console.tron.log({ student: { id } });
  return {
    type: '@student/LOAD_REQUEST',
    payload: { student: { id } },
  };
}

export function loadSuccess(student) {
  return {
    type: '@student/LOAD_SUCCESS',
    payload: { student },
  };
}

export function updateRequest(
  id,
  name,
  email,
  birthday,
  weight,
  height,
  user_id
) {
  return {
    type: '@student/UPDATE_REQUEST',
    payload: {
      student: { id, name, email, birthday, weight, height, user_id },
    },
  };
}

export function updateSuccess(student) {
  return {
    type: '@student/UPDATE_SUCCESS',
    payload: { student },
  };
}

export function cancel() {
  return {
    type: '@student/CANCEL',
  };
}

export function failure() {
  return {
    type: '@student/FAILURE',
  };
}
