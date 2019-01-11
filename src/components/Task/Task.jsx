import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTaskFromUrl } from 'selectors/TasksSelectors';
import * as tasksActions from 'actions/tasksActions';
import { bindActionCreators } from 'redux';
import './task.scss';
import NotFound from 'components/NotFound/NotFound';
import SuperSuperHeader from 'components/SuperSuperHeader';

export class Task extends Component {
    doTask = event => {
        const { actions } = this.props;
        actions.doTask(event.target.id);
    };

    undoTask = event => {
        const { actions } = this.props;
        actions.undoTask(event.target.id);
    };

    render() {
        const { task, match } = this.props;
        if (!task) {
            return (
                <NotFound name={`task with URL "${match.params.taskUrl}"`} />
            );
        }
        return (
            <div className="task">
                <input
                    type="button"
                    id={task.get('id')}
                    onClick={this.doTask}
                    value="Complete task"
                />
                <input
                    type="button"
                    id={task.get('id')}
                    onClick={this.undoTask}
                    value="Undo task"
                />
                <h4>{task.get('isDone') ? 'DONE' : 'NOT DONE'}</h4>
                <SuperSuperHeader />
                <h4>{task.get('description')}</h4>
                <p>{task.get('text')}</p>
            </div>
        );
    }
}

Task.propTypes = {
    match: PropTypes.object,
    task: PropTypes.object,
    actions: PropTypes.object.isRequired,
};

Task.defaultProps = {
    match: null,
    task: null,
};

function mapStateToProps(state, ownProps) {
    return {
        task: getTaskFromUrl(state, ownProps.match.params.taskUrl),
    };
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(tasksActions, dispatch),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Task);
