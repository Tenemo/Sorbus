import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as tasksActions from 'actions/tasksActions';
import { bindActionCreators } from 'redux';
import DropdownToggle from '../DropdownToggle';
import TaskListItem from './TaskListItem/TaskListItem';

class TaskList extends Component {
    toggleTaskExpanded = (event) => {
        event.preventDefault();
        this.props.actions.toggleTaskExpanded(event.target.getAttribute('taskid'));
    }

    render() {
        const { task } = this.props;
        return (
            <li className="taskList">
                {task.get('id') !== 'rootTask'
                    && (
                        <React.Fragment>

                            <DropdownToggle
                                toggleTaskExpanded={this.toggleTaskExpanded}
                                taskId={task.get('id')}
                                isExpanded={task.get('isExpanded')}
                            />
                            {task.get('name')}
                        </React.Fragment>
                    )
                }
                {task.get('isExpanded')
                    && (
                        <ol>
                            {task.get('children').map(childId => (this.props.tasksData.get(childId).get('children')
                                ? <TaskListWrapper key={childId} task={this.props.tasksData.get(childId)} />
                                : <TaskListItem key={childId} isRoot={task.get('id') === 'rootTask'} />))}
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
