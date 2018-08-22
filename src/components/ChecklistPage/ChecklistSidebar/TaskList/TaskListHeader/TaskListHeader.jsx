import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TaskListHeader extends Component {
    render() {
        return (
            <Link to={`/checklist/${this.props.task.get('urlString')}`} className="taskListHeader">
                {this.props.task.get('name')}
            </Link>
        );
    }
}

TaskListHeader.propTypes = {

};

export default TaskListHeader;
