import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './checklistPage.scss';

import Task from './Task/Task';
import TaskList from './TaskList/TaskList';

export class ChecklistPage extends React.Component {
    render() {
        return (
            <section className="checklistPage">
            <div className="sidebar">
                <TaskList />
            </div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Task}
                    />
                    <Route
                        path="/settings/:taskId"
                        component={Task}
                    />
                </Switch>
            </section>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default ChecklistPage;