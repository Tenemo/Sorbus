import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './checklistPage.scss';
import TaskList from 'components/TaskList/TaskList';
import Task from 'components/Task/Task';

export class ChecklistPage extends PureComponent {
    render() {
        const { match } = this.props;
        return (
            <section className="checklistPage">
                <div className="checklistSidebar">
                    <TaskList taskId="rootTask" />
                </div>
                <div className="taskContainer">
                    <Switch>
                        <Route
                            path={`${match.url}/:taskUrl`}
                            component={Task}
                        />
                        <Route path="" exact render={() => 'Choose a task!'} />
                    </Switch>
                </div>
            </section>
        );
    }
}

ChecklistPage.propTypes = {
    match: PropTypes.object,
};
ChecklistPage.defaultProps = {
    match: null,
};

export default ChecklistPage;
