import { TASK_REQUEST } from '../constants';

const initialState = {
  isLoading: false,
  tasks: {},
  error: {},
};

export default (state=initialState, action) => {
  const {type, data} = action;
  switch (type) {
    case TASK_REQUEST:
      return {...state, isLoading: true, tasks: {}, error: {} };
    case `${TASK_REQUEST}_SUCCESS`:
      return {...state, isLoading: false, tasks: data, error: {} };
    case `${TASK_REQUEST}_FAILURE`:
      return {...state, isLoading: false, tasks: {}, error: {} };
    default:
      return {...state}
  }
}
