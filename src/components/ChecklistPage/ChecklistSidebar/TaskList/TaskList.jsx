import React, { Component } from 'react';
import { connect } from 'react-redux';

class TaskList extends Component {
    render() {
        return (
            <h2>task list!</h2>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasksData: state.get('tasks').get('tasksData')
    };
}

export default connect(
    mapStateToProps
)(TaskList);