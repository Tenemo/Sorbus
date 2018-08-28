import * as types from 'actions/actionTypes';
import initialState from './initialState';

export default function tasksReducer(
    state = initialState.get('tasks'),
    action,
) {
    switch (action.type) {
        case types.TOGGLE_TASK_EXPANDED:
            return state.setIn(
                ['tasksData', action.taskId, 'isExpanded'],
                !state.getIn(['tasksData', action.taskId, 'isExpanded']),
            );
        case types.DO_TASK:
            return state.setIn(['tasksData', action.taskId, 'isDone'], true);
        case types.UNDO_TASK:
            return state.setIn(['tasksData', action.taskId, 'isDone'], false);
        default:
            return state;
    }
}
