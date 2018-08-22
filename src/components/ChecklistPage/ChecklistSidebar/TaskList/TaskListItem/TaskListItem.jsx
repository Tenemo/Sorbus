import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TaskListItem extends PureComponent {
    render() {
        return (
            <li>
                <Link to={`/checklist/${this.props.task.get('urlString')}`}>
                    {this.props.task.get('name')}
                </Link>
            </li>
        );
    }
}

TaskListItem.propTypes = {
    task: PropTypes.object.isRequired,
};

export default TaskListItem;
