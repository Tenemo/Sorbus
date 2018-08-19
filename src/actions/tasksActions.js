/**
 * Data Actions
 *
 * Actions related to tasks.
 */
import * as types from './actionTypes';

export function toggleTaskExpanded(taskId) {
    return {
        type: types.TOGGLE_TASK_EXPANDED,
        taskId
    };
}