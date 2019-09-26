import { LOGIN_REQUEST } from '../constants';

const initialState = {
  isLoading: false,
  message: {},
  error: {},
};

export default (state=initialState, action) => {
  const {type} = action;
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, message: {}, error: {} };
    case `${LOGIN_REQUEST}_SUCCESS`:
      const {message} = action;
      return { ...state, isLoading: false, message, error: {}};
    case `${LOGIN_REQUEST}_FAILURE`:
      const {error} = action;
      return { ...state, isLoading: false, message: {}, error}
    default:
      return state
  }
}
