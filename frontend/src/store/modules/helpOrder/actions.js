export function loadAllRequest() {
  return {
    type: '@helpOrder/LOAD_ALL_REQUEST',
  };
}

export function loadAllSuccess(helpOrders) {
  return {
    type: '@helpOrder/LOAD_ALL_SUCCESS',
    payload: { helpOrders },
  };
}

export function answerRequest(id, answer) {
  return {
    type: '@helpOrder/ANSWER_REQUEST',
    payload: {
      helpOrder: { id, answer },
    },
  };
}

export function answerSuccess(helpOrder) {
  return {
    type: '@helpOrder/ANSWER_SUCCESS',
    payload: { helpOrder },
  };
}

export function loadRequest(id) {
  return {
    type: '@helpOrder/LOAD_REQUEST',
    payload: { helpOrder: { id } },
  };
}

export function loadSuccess(helpOrder) {
  return {
    type: '@helpOrder/LOAD_SUCCESS',
    payload: { helpOrder },
  };
}

export function failure() {
  return {
    type: '@helpOrder/FAILURE',
  };
}
