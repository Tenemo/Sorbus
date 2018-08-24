import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks } from 'selectors/TasksSelectors';
import './task.scss';
import NotFound from 'components/NotFound/NotFound';

class Task extends PureComponent {
    render() {
        if (this.props.tasksUrlMap.get(this.props.match.params.taskUrl) === undefined) {
            return <NotFound name={`task with URL "${this.props.match.params.taskUrl}"`} />;
        }
        const task = this.props.tasksData.get(
            this.props.tasksUrlMap.get(
                this.props.match.params.taskUrl,
            ),
        );
        return (
            <React.Fragment>
                <h2>{task.get('name')}</h2>
                <h4>{task.get('description')}</h4>
                <p>{task.get('text')}</p>
            </React.Fragment>
        );
    }
}

Task.propTypes = {
    match: PropTypes.object,
    tasksData: PropTypes.object,
    tasksUrlMap: PropTypes.object,
};

Task.defaultProps = {
    match: null,
    tasksData: null,
    tasksUrlMap: null,
};

function mapStateToProps(state) {
    return {
        tasksData: state.get('tasks').get('tasksData'),
        tasksUrlMap: state.get('tasks').get('tasksUrlMap'),
    };
}

export default connect(
    mapStateToProps,
)(Task);
