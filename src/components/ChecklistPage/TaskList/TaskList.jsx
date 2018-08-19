import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './taskList.scss';

class TaskList extends Component {
    render() {
        return (
            <div>
                {this.props.tasks.valueSeq().map((value) =>
                    <div
                        key={value.id}
                        className="taskListItem"
                    >
                    {value.get('name')}
                    </div>
                )}
            </div>
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        tasks: state.get('tasks')
    };
}

export default connect(
    mapStateToProps,
)(TaskList);