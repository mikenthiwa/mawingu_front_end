import { TASK_REQUEST } from '../constants';
import taskService, {nextPageService} from '../../services/taskService'

const fetchTasksRequest = () => ({
  type: TASK_REQUEST,
});

const fetchTasksSuccess = (data) => ({
  type: `${TASK_REQUEST}_SUCCESS`,
  data
});

const fetchTasksFailure = (error) => ({
  type: `${TASK_REQUEST}_FAILURE`,
  error
});

export const nextPreviousPage = (page, callback) => async dispatch => {
  dispatch(fetchTasksRequest());
  try {
    const token = window.localStorage.getItem('token');
    const { data } = await nextPageService(token, page);
    dispatch(fetchTasksSuccess(data));
    callback();
  }  catch (e) {
    const {response} = e;
    dispatch(fetchTasksFailure(response))
  }
};

export const fetchAssignedTasks = (page, callback) => async dispatch => {
  dispatch(fetchTasksRequest());
  try {
    const token = window.localStorage.getItem('token');
    const { data } = await taskService(token, page);
    dispatch(fetchTasksSuccess(data))
    callback()
  } catch (e) {
    const {response} = e;
    dispatch(fetchTasksFailure(response))
  }
};





