export function addRequest(title, duration, price) {
  return {
    type: '@plan/ADD_REQUEST',
    payload: { plan: { title, duration, price } },
  };
}

export function addSuccess(plan) {
  return {
    type: '@plan/ADD_SUCCESS',
    payload: { plan },
  };
}

export function loadRequest(id, open) {
  return {
    type: '@plan/LOAD_REQUEST',
    payload: { plan: { id, open } },
  };
}

export function loadSuccess(plan) {
  return {
    type: '@plan/LOAD_SUCCESS',
    payload: { plan },
  };
}

export function updateRequest(id, title, duration, price) {
  return {
    type: '@plan/UPDATE_REQUEST',
    payload: {
      plan: { id, title, duration, price },
    },
  };
}

export function updateSuccess(plan) {
  return {
    type: '@plan/UPDATE_SUCCESS',
    payload: { plan },
  };
}

export function deleteRequest(id) {
  return {
    type: '@plan/DELETE_REQUEST',
    payload: { plan: { id } },
  };
}

export function deleteSuccess(plans) {
  return {
    type: '@plan/DELETE_SUCCESS',
    payload: { plans },
  };
}

export function loadAllRequest() {
  return {
    type: '@plan/LOAD_ALL_REQUEST',
  };
}

export function loadAllSuccess(plans) {
  return {
    type: '@plan/LOAD_ALL_SUCCESS',
    payload: { plans },
  };
}

export function cancel() {
  return {
    type: '@plan/CANCEL',
  };
}

export function failure() {
  return {
    type: '@plan/FAILURE',
  };
}
