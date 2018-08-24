import { createSelector } from 'reselect';

export const getTasks = state => state.get('tasks').get('tasksData');
export const getTasksUrlMap = state => state.get('tasks').get('tasksUrlMap');
// export const getRootTask = state => state.get('tasks').get('rootTask');

// getChildrenTasks
const getTask = createSelector(

);

const targetChildren = (state, children) => children;

export const makeGetChildrenTasks = () => createSelector(
    [getTasks, targetChildren],
    (getTasks, targetChildren) => targetChildren.map(childId => getTasks.get(childId)),
);
