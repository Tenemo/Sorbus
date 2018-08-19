import React from 'react';
import PropTypes from 'prop-types';

const DropdownToggle = ({toggleExpanded, taskid, isExpanded}) => {
    return (
        <span
            className="dropdownToggle"
            onClick={toggleExpanded}
            taskid={taskid}
        >
            {(isExpanded) ? <React.Fragment>v</React.Fragment> : <React.Fragment>&#62;</React.Fragment>}
            &nbsp;
        </span>
    );
};

DropdownToggle.propTypes = {
    toggleExpanded: PropTypes.func.isRequired,
    taskid: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired
};

export default DropdownToggle;