import React, { Component } from 'react';
import { connect } from 'react-redux';
import './task.scss';

class Task extends Component {
    render() {
        return (
            <div>
                What to do?
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(
    mapStateToProps,
)(Task);