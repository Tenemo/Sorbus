import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'sanitize.css';
import '../styles/global.scss';

import * as dataDisplayActions from 'actions/tasksActions';
import Header from './common/Header/Header';
import NotFound from './NotFound/NotFound';
import ChecklistPage from 'components/ChecklistPage/ChecklistPage';

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="mainContainer">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={ChecklistPage}
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
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dataDisplayActions, dispatch)
    };
}

export default withRouter(connect(
    null,
    mapDispatchToProps
)(App));