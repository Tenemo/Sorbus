import * as types from 'actions/actionTypes';
import initialState from './initialState';
import { merge } from 'immutable';

export default function dataReducer(state = initialState.get('tasks'), action) {
    switch (action.type) {
        case types.TOGGLE_TASK_DONE:
            return merge(state, action.task);
        default:
            return state;
    }
}