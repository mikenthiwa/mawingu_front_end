import { LOGIN_REQUEST } from '../constants';
import loginApi from '../../services/loginService'

const loginRequest = () => ({
  type: LOGIN_REQUEST
});

const loginSuccess = (message) => ({
  type: `${LOGIN_REQUEST}_SUCCESS`,
  message,
});

const loginFailure = (error) => ({
  type: `${LOGIN_REQUEST}_FAILURE`,
  error,
});

export const login = (data, callback) => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await loginApi(data);
    const { data: responseData } = response;
    dispatch(loginSuccess(responseData));
    callback()
  } catch (e) {
    const { response: {data: error} } = e;
    dispatch(loginFailure(error))
  }
};
