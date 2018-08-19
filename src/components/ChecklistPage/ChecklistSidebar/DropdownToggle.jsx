import React from 'react';
import PropTypes from 'prop-types';

const DropdownToggle = ({toggleTaskExpanded, taskId, isExpanded}) => {
    return (
        <span
            className="dropdownToggle"
            onClick={toggleTaskExpanded}
            taskid={taskId}
        >
            {(isExpanded) ? <React.Fragment>v</React.Fragment> : <React.Fragment>&#62;</React.Fragment>}
            &nbsp;
        </span>
    );
};

DropdownToggle.propTypes = {
    toggleTaskExpanded: PropTypes.func.isRequired,
    taskId: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired
};

export default DropdownToggle;