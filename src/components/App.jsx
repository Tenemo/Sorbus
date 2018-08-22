import React from 'react';
import {
    Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'sanitize.css';
import '../styles/global.scss';

import * as dataDisplayActions from 'actions/tasksActions';
import ChecklistPage from 'components/ChecklistPage/ChecklistPage';
import EditorPage from 'components/EditorPage/EditorPage';
import Header from './common/Header/Header';
import NotFound from './NotFound/NotFound';

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="mainContainer">
                    <Switch>
                        <Redirect
                            exact
                            from="/"
                            to="/checklist"
                        />
                        <Route
                            path="/checklist"
                            component={ChecklistPage}
                        />
                        <Route
                            exact
                            path="/editor"
                            component={EditorPage}
                        />
                        <Route
                            path=""
                            component={NotFound}
                        />
                    </Switch>
                </div>
            </React.Fragment>

        );
    }
}

App.propTypes = {
    actions: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dataDisplayActions, dispatch),
    };
}

export default withRouter(connect(
    null,
    mapDispatchToProps,
)(App));
