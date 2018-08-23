import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as tasksActions from 'actions/tasksActions';
import { bindActionCreators } from 'redux';
import { getTasks } from 'selectors/TasksSelectors';
import TaskListHeader from './TaskListHeader/TaskListHeader';
import DropdownToggle from '../DropdownToggle';
import TaskListItem from './TaskListItem/TaskListItem';
import './taskList.scss';

class TaskList extends PureComponent {
    toggleTaskExpanded = (event) => {
        event.preventDefault();
        this.props.actions.toggleTaskExpanded(event.target.getAttribute('taskid'));
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
    childrenTasks: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        childrenTasks: ownProps.task.get('children').map(childId => getTasks(state).get(childId)),
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
