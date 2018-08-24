import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as tasksActions from 'actions/tasksActions';
import { bindActionCreators } from 'redux';
import { makeGetChildrenTasks } from 'selectors/TasksSelectors';
import DropdownToggle from 'components/DropdownToggle/DropdownToggle';
import TaskListHeader from './TaskListHeader/TaskListHeader';
import TaskListItem from './TaskListItem/TaskListItem';
import './taskList.scss';

class TaskList extends Component {
    shouldComponentUpdate(nextProps) {
        if (this.props.task !== nextProps.task) return true;
        nextProps.childrenTasks.forEach((child, index) => {
            if (child !== this.props.childrenTasks.get(index)) return true;
        });
        if (nextProps.childrenTasks.size !== this.props.childrenTasks.size) return true;
        // console.log(`${this.props.task.get('name')}: ${nextProps.task.get('isExpanded') !== this.props.task.get('isExpanded')}`);
        return false;
    }

    toggleTaskExpanded = (event) => {
        this.props.actions.toggleTaskExpanded(event.target.getAttribute('taskid'));
    }

    render() {
        const { task, childrenTasks } = this.props;
        const isRoot = task.get('id') === 'rootTask';
        console.warn(`${task.get('name')} rendered.`);
        return (
            <li className="taskList">
                {!isRoot
                    && (
                        <React.Fragment>
                            {!task.get('children').isEmpty() && (
                                <DropdownToggle
                                    toggleTaskExpanded={this.toggleTaskExpanded}
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
    const mapStateToProps = (state, ownProps) => ({
        task: state.get('tasks').get('tasksData').get(ownProps.taskId),
        childrenTasks: getChildrenTasks(state, state.get('tasks').get('tasksData').get(ownProps.taskId).get('children')),
    });
    return mapStateToProps;
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(tasksActions, dispatch),
    };
}

// Redux doesn't handle connected component recurrency without a wrapping component
const TaskListWrapper = connect(
    makeMapStateToProps,
    mapDispatchToProps,
)(TaskList);

export default TaskListWrapper;
