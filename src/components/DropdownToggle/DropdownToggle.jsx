import React, { PureComponent } from 'react';
import './dropdownToggle.scss';
import PropTypes from 'prop-types';

export class DropdownToggle extends PureComponent {
    render() {
        const { onDropdownClick, id, isExpanded } = this.props;
        return (
            <span
                className="dropdownToggle"
                onClick={onDropdownClick}
                onKeyPress={onDropdownClick}
                id={id}
                role="button"
                tabIndex={0}
            >
                {isExpanded ? 'v' : '>'}{' '}
            </span>
        );
    }
}

DropdownToggle.propTypes = {
    onDropdownClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
};

export default DropdownToggle;
