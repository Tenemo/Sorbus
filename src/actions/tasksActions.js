/**
 * Data Actions
 *
 * Actions related to tasks.
 */
import * as types from './actionTypes';

/**
 * Dispatched after successful server request for ticket and user data.
 *
 * @param {Object} data - New user and ticket data fetched from the server.
 * @returns {Object} An action object with FETCH_DATA_SUCCESS type, passing fetched data.
 */
export function fetchDataSuccess(task) {
    return {
        type: types.TOGGLE_TASK_DONE,
        task
    };
}