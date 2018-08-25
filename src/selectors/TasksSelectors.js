import { createSelector } from 'reselect';

export const getTasks = state => state.get('tasks').get('tasksData');
export const getTasksUrlMap = state => state.get('tasks').get('tasksUrlMap');

export const getTask = createSelector(
    [getTasks, (state, taskId) => taskId],
    (tasks, taskId) => tasks.get(taskId),
);
export const makeGetTask = () => getTask;

export const getChildrenTasks = createSelector(
    [getTasks, getTask],
    (tasks, task) => task.get('children').map(childId => tasks.get(childId)),
);
export const makeGetChildrenTasks = () => getChildrenTasks;

export const getTaskFromUrl = createSelector(
    [getTasks, getTasksUrlMap, (state, taskUrl) => taskUrl],
    (tasks, tasksUrlMap, taskUrl) => tasks.get(tasksUrlMap.get(taskUrl)),
);
export const makeGetTaskFromUrl = () => getTaskFromUrl;

