import { createSelector } from 'reselect';

export const getTasks = state => state.get('tasks').get('tasksData');
export const getTasksUrlMap = state => state.get('tasks').get('tasksUrlMap');
export const getRootTask = state => state.get('tasks').get('rootTask');

// getChildrenTasks
// getTask
