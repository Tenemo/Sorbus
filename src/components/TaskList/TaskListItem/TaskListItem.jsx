import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TaskListItem extends PureComponent {
    render() {
        const { task } = this.props;
        return (
            <li className={`taskListItem ${task.get('isDone') ? 'done' : ''}`}>
                <Link to={`/checklist/${task.get('urlString')}`}>
                    {task.get('name')}
                </Link>
            </li>
        );
    }
}

TaskListItem.propTypes = {
    task: PropTypes.object.isRequired,
};

export default TaskListItem;
