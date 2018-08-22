import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './checklistSidebar.scss';
import TaskList from './TaskList/TaskList';

class ChecklistSidebar extends PureComponent {
    render() {
        return (
            <div className="checklistSidebar">
                <TaskList task={this.props.rootTask} />
            </div>
        );
    }
}

ChecklistSidebar.propTypes = {
    rootTask: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        rootTask: state.get('tasks').get('rootTask'),
    };
}

export default connect(
    mapStateToProps,
)(ChecklistSidebar);
