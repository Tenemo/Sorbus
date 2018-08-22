import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TaskListHeader extends PureComponent {
    render() {
        return (
            <Link to={`/checklist/${this.props.task.get('urlString')}`} className="taskListHeader">
                {this.props.task.get('name')}
            </Link>
        );
    }
}

TaskListHeader.propTypes = {
    task: PropTypes.object.isRequired,
};

export default TaskListHeader;
