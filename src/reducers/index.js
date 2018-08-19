import { combineReducers } from 'redux-immutable';
import tasks from './tasksReducer';

const rootReducer = combineReducers({
    tasks
});

export default rootReducer;