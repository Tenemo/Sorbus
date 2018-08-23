import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './checklistPage.scss';

import Task from './Task/Task';
import ChecklistSidebar from './ChecklistSidebar/ChecklistSidebar';

export class ChecklistPage extends React.PureComponent {
    render() {
        const { match } = this.props;
        return (
            <section className="checklistPage">
                <div className="sidebar">
                    <ChecklistSidebar />
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
};
ChecklistPage.defaultProps = {
    match: null,
};

export default ChecklistPage;
