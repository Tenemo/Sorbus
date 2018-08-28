/**
 * Data Actions
 *
 * Actions related to tasks.
 */
import * as types from './actionTypes';

export function toggleTaskExpanded(taskId) {
    return {
        type: types.TOGGLE_TASK_EXPANDED,
        taskId,
    };
}

export function doTask(taskId) {
    return {
        type: types.DO_TASK,
        taskId,
    };
}

export function undoTask(taskId) {
    return {
        type: types.UNDO_TASK,
        taskId,
    };
}
