import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as tasksActions from 'actions/tasksActions';
import { bindActionCreators } from 'redux';
import TaskListHeader from './TaskListHeader/TaskListHeader';
import DropdownToggle from '../DropdownToggle';
import TaskListItem from './TaskListItem/TaskListItem';
import './taskList.scss';

class TaskList extends Component {
    toggleTaskExpanded = (event) => {
        event.preventDefault();
        this.props.actions.toggleTaskExpanded(event.target.getAttribute('taskid'));
    }

    render() {
        const { task } = this.props;
        const isRoot = task.get('id') === 'rootTask';
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
                            {task.get('children').map((childId) => {
                                const child = this.props.tasksData.get(childId);
                                return (!child.get('children').isEmpty()
                                    ? <TaskListWrapper key={childId} task={child} />
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
    tasksData: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        tasksData: state.get('tasks').get('tasksData'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(tasksActions, dispatch),
    };
}

// Redux doesn't handle connected component recurrency without a wrapping component
const TaskListWrapper = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TaskList);

export default TaskListWrapper;
