import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as tasksActions from 'actions/tasksActions';
import { bindActionCreators } from 'redux';
import { makeGetChildrenTasks, makeGetTask } from 'selectors/TasksSelectors';
import DropdownToggle from 'components/DropdownToggle/DropdownToggle';
import TaskListHeader from './TaskListHeader/TaskListHeader';
import TaskListItem from './TaskListItem/TaskListItem';
import './taskList.scss';

class TaskList extends Component {
    shouldComponentUpdate(nextProps) {
        const { task, childrenTasks } = this.props;
        if (task !== nextProps.task) return true;
        if (nextProps.childrenTasks.size !== childrenTasks.size) return true;
        nextProps.childrenTasks.forEach((child, index) => (child !== childrenTasks.get(index)));
        return false;
    }

    toggleTask = (event) => {
        const { actions } = this.props;
        actions.toggleTaskExpanded(event.target.getAttribute('taskid'));
    }

    render() {
        const { task, childrenTasks } = this.props;
        const isRoot = task.get('id') === 'rootTask';
        return (
            <li className="taskList">
                {!isRoot
                    && (
                        <React.Fragment>
                            {!task.get('children').isEmpty() && (
                                <DropdownToggle
                                    toggleTaskExpanded={this.toggleTask}
                                    taskId={task.get('id')}
                                    isExpanded={task.get('isExpanded')}
                                />
                            )}
                            <TaskListHeader task={task} />
                        </React.Fragment>
                    )
                }
                {task.get('isExpanded')
                    && (
                        <ol>
                            {childrenTasks.map((child) => {
                                const childId = child.get('id');
                                return (!child.get('children').isEmpty()
                                    ? <TaskListWrapper key={childId} taskId={childId} />
                                    : <TaskListItem key={childId} task={child} />);
                            })}
                        </ol>
                    )
                }
            </li>
        );
    }
}

TaskList.propTypes = {
    actions: PropTypes.object.isRequired,
    task: PropTypes.object.isRequired,
    childrenTasks: PropTypes.object.isRequired,
};

const makeMapStateToProps = () => {
    const getChildrenTasks = makeGetChildrenTasks();
    const getTask = makeGetTask();
    const mapStateToProps = (state, ownProps) => ({
        task: getTask(state, ownProps.taskId),
        childrenTasks: getChildrenTasks(state, ownProps.taskId),
    });
    return mapStateToProps;
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(tasksActions, dispatch),
});
// Redux doesn't handle connected component recurrency without a wrapping component
const TaskListWrapper = connect(
    makeMapStateToProps,
    mapDispatchToProps,
)(TaskList);

export default TaskListWrapper;
