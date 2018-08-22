import React from 'react';
import PropTypes from 'prop-types';

const DropdownToggle = ({ toggleTaskExpanded, taskId, isExpanded }) => (
    <span
        className="dropdownToggle"
        onClick={toggleTaskExpanded}
        onKeyPress={toggleTaskExpanded}
        taskid={taskId}
        role="button"
        tabIndex={0}
    >
        {(isExpanded)
            ? 'v'
            : '>'
        }
        {' '}
    </span>
);

DropdownToggle.propTypes = {
    toggleTaskExpanded: PropTypes.func.isRequired,
    taskId: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
};

export default DropdownToggle;
