import React, { Component } from 'react';
import { connect } from 'react-redux';
import './taskList.scss';

class TaskList extends Component {
    render() {
        return (
            <div>
                list of tasks
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.get('tasks')
    };
}

export default connect(
    mapStateToProps,
)(TaskList);