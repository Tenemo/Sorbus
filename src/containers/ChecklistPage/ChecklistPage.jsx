import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './checklistPage.scss';
import { getTasks, getRootTask } from 'selectors/TasksSelectors';

import TaskList from 'components/TaskList/TaskList';
import Task from 'components/Task/Task';

export class ChecklistPage extends React.PureComponent {
    render() {
        const { match } = this.props;
        return (
            <section className="checklistPage">
                <div className="checklistSidebar">
                    <TaskList task={this.props.rootTask} />
                </div>
                <div className="taskContainer">
                    <Switch>
                        <Route
                            path={`${match.url}/:taskUrl`}
                            component={Task}
                        />
                        <Route
                            path=""
                            exact
                            component={() => 'Choose a task!'} // eslint-disable-line react/jsx-no-bind
                        />
                    </Switch>
                </div>
            </section>
        );
    }
}

ChecklistPage.propTypes = {
    match: PropTypes.object,
    rootTask: PropTypes.object.isRequired,
};
ChecklistPage.defaultProps = {
    match: null,
};

function mapStateToProps(state) {
    return {
        rootTask: state.get('tasks').get('rootTask'),
    };
}

export default connect(
    mapStateToProps,
)(ChecklistPage);
