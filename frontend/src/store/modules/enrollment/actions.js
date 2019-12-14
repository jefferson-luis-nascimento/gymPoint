export function addRequest(student_id, plan_id, start_date) {
  return {
    type: '@enrollment/ADD_REQUEST',
    payload: { enrollment: { student_id, plan_id, start_date } },
  };
}

export function addSuccess(enrollment) {
  return {
    type: '@enrollment/ADD_SUCCESS',
    payload: { enrollment },
  };
}

export function loadRequest(id) {
  return {
    type: '@enrollment/LOAD_REQUEST',
    payload: { enrollment: { id } },
  };
}

export function loadSuccess(enrollment) {
  return {
    type: '@enrollment/LOAD_SUCCESS',
    payload: { enrollment },
  };
}

export function updateRequest(id, student_id, plan_id, start_date) {
  return {
    type: '@enrollment/UPDATE_REQUEST',
    payload: {
      enrollment: { id, student_id, plan_id, start_date },
    },
  };
}

export function updateSuccess(enrollment) {
  return {
    type: '@enrollment/UPDATE_SUCCESS',
    payload: { enrollment },
  };
}

export function deleteRequest(id) {
  return {
    type: '@enrollment/DELETE_REQUEST',
    payload: { enrollment: { id } },
  };
}

export function deleteSuccess(enrollments) {
  return {
    type: '@enrollment/DELETE_SUCCESS',
    payload: { enrollments },
  };
}

export function loadAllRequest() {
  return {
    type: '@enrollment/LOAD_ALL_REQUEST',
  };
}

export function loadAllSuccess(enrollments) {
  return {
    type: '@enrollment/LOAD_ALL_SUCCESS',
    payload: { enrollments },
  };
}

export function cancel() {
  return {
    type: '@enrollment/CANCEL',
  };
}

export function failure() {
  return {
    type: '@enrollment/FAILURE',
  };
}
