import * as types from 'actions/actionTypes';
import { merge } from 'immutable';
import initialState from './initialState';

export default function tasksReducer(
    state = initialState.get('editor'),
    action,
) {
    switch (action.type) {
        case types.TOGGLE_TASK_DONE:
            return merge(state, action.task);
        default:
            return state;
    }
}
