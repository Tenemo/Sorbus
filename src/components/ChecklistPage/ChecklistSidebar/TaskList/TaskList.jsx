import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as tasksActions from 'actions/tasksActions';
import { bindActionCreators } from 'redux';
import DropdownToggle from '../DropdownToggle';

class TaskList extends Component {
    toggleTaskExpanded = (event) => {
        event.preventDefault();
        this.props.actions.toggleTaskExpanded(event.target.getAttribute('taskid'));
    }

    render() {
        return (
            <ol className="taskList">
                {this.props.tasks.map((childId) => {
                    const child = this.props.tasksData.get(childId);
                    return (
                        <li
                            key={childId}
                            className="taskListItem"
                        >
                            {!child.get('children').isEmpty()
                                && (
                                    <DropdownToggle
                                        toggleTaskExpanded={this.toggleTaskExpanded}
                                        taskId={childId}
                                        isExpanded={child.get('isExpanded')}
                                    />
                                )
                            }
                            <Link to={`/checklist/${child.get('urlString')}`}>
                                {child.get('name')}
                            </Link>
                            {child.get('isExpanded')
                                && <TaskListWrapper tasks={child.get('children')} />
                            }
                        </li>
                    );
                })}
            </ol>
        );
    }
}

TaskList.propTypes = {
    actions: PropTypes.object.isRequired,
    tasks: PropTypes.object.isRequired,
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

const TaskListWrapper = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TaskList);

export default TaskListWrapper;
