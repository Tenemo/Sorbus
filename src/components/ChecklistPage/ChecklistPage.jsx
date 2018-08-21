import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './checklistPage.scss';

import Task from './Task/Task';
import ChecklistSidebar from './ChecklistSidebar/ChecklistSidebar';

export class ChecklistPage extends React.Component {
    render() {

        return (
            <section className="checklistPage">
                <div className="sidebar">
                    <ChecklistSidebar />
                </div >
                <div className="taskContainer">
                    <Switch>
                        <Route
                            path={this.props.match.url + '/:taskUrl'}
                            component={Task}
                        />
                        <Route
                            path=""
                            exact
                            component={() => 'Choose a task!'} // eslint-disable-line react/jsx-no-bind
                        />
                    </Switch>
                </div >
            </section>

        );
    }
}

ChecklistPage.propTypes = {
    match: PropTypes.object
};

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default withRouter(connect(
    null,
    mapDispatchToProps
)(ChecklistPage));