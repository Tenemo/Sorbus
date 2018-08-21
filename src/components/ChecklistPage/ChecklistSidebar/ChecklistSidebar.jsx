import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as tasksActions from 'actions/tasksActions';
import './checklistSidebar.scss';
import TaskList from './TaskList/TaskList';
import DropdownToggle from './DropdownToggle';

class ChecklistSidebar extends Component {
    toggleTaskExpanded = (event) => {
        event.preventDefault();
        this.props.actions.toggleTaskExpanded(event.target.getAttribute('taskid'));
    }

    render() {
        return (
            <div className="checklistSidebar">
                <ol className="taskList">
                    {this.props.rootTasks.map((rootTaskId) => {
                        const task = this.props.tasksData.get(rootTaskId);
                        return (
                            <li
                                key={rootTaskId}
                                className="taskListItem"
                            >
                                {!task.get('children').isEmpty()
                                    && (
                                        <DropdownToggle
                                            toggleTaskExpanded={this.toggleTaskExpanded}
                                            taskId={rootTaskId}
                                            isExpanded={task.get('isExpanded')}
                                        />
                                    )
                                }
                                <Link
                                    className="rootTask"
                                    to={`/checklist/${task.get('urlString')}`}
                                >
                                    {task.get('name')}
                                </Link>
                                {task.get('isExpanded')
                                    ? (
                                        <TaskList
                                            tasks={task.get('children')}
                                        />
                                    )
                                    : null}
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}

ChecklistSidebar.propTypes = {
    actions: PropTypes.object.isRequired,
    tasksData: PropTypes.object.isRequired,
    rootTasks: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        tasksData: state.get('tasks').get('tasksData'),
        rootTasks: state.get('tasks').get('rootTasks'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(tasksActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChecklistSidebar);
