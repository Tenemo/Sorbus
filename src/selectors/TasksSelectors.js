import { createSelector } from 'reselect';

const getTasks = state => state.get('tasks').get('tasksData');
const getTasksUrlMap = state => state.get('tasks').get('tasksUrlMap');

const getTask = createSelector(
    [getTasks, (state, taskId) => taskId],
    (tasks, taskId) => tasks.get(taskId),
);
const makeGetTask = () => getTask;

const getChildrenTasks = createSelector([getTasks, getTask], (tasks, task) =>
    task.get('children').map(childId => tasks.get(childId)),
);
const makeGetChildrenTasks = () => getChildrenTasks;

const getTaskFromUrl = createSelector(
    [getTasks, getTasksUrlMap, (state, taskUrl) => taskUrl],
    (tasks, tasksUrlMap, taskUrl) => tasks.get(tasksUrlMap.get(taskUrl)),
);
const makeGetTaskFromUrl = () => getTaskFromUrl;

export {
    getTasks,
    getTask,
    makeGetTask,
    getChildrenTasks,
    makeGetChildrenTasks,
    getTaskFromUrl,
    makeGetTaskFromUrl,
};
