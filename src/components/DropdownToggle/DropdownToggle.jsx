import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class DropdownToggle extends PureComponent {
    render() {
        const { toggleTaskExpanded, taskId, isExpanded } = this.props;
        return (
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
    }
}

DropdownToggle.propTypes = {
    toggleTaskExpanded: PropTypes.func.isRequired,
    taskId: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
};

export default DropdownToggle;
