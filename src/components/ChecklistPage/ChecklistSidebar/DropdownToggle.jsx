import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class DropdownToggle extends PureComponent {
    render() {
        return (
            <span
                className="dropdownToggle"
                onClick={this.props.toggleTaskExpanded}
                onKeyPress={this.props.toggleTaskExpanded}
                taskid={this.props.taskId}
                role="button"
                tabIndex={0}
            >
                {(this.props.isExpanded)
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
