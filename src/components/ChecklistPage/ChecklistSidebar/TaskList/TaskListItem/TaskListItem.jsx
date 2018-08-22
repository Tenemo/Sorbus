import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TaskListItem extends PureComponent {
    render() {
        console.log('TaskListItem render');
        return (
            <li>
                <Link to={`/checklist/${child.get('urlString')}`}>
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
