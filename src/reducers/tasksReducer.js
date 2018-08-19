import * as types from 'actions/actionTypes';
import initialState from './initialState';
import { setIn } from 'immutable';

export default function tasksReducer(state = initialState.get('tasks'), action) {
    switch (action.type) {
        case types.TOGGLE_TASK_EXPANDED:
            return setIn(
                state,
                ['tasksData', action.taskId, 'isExpanded'],
                !state.getIn(['tasksData', action.taskId, 'isExpanded'])
            );
        default:
            return state;
    }
}