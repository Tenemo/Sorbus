import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TaskListHeader extends PureComponent {
    render() {
        const { task } = this.props;
        return (
            <Link to={`/checklist/${task.get('urlString')}`} className="taskListHeader">
                {task.get('name')}
            </Link>
        );
    }
}

TaskListHeader.propTypes = {
    task: PropTypes.object.isRequired,
};

export default TaskListHeader;
