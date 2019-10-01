import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import assignedTasks from './taskReducer';

export default combineReducers({
  loginReducer,
  assignedTasks,
})
