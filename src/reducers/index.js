import { combineReducers } from 'redux-immutable';
import tasks from './tasksReducer';
import editor from './editorReducer';

const rootReducer = combineReducers({
    editor,
    tasks,
});

export default rootReducer;
