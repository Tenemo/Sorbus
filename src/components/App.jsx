import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'sanitize.css';
import '../styles/global.scss';
import ChecklistPage from 'components/ChecklistPage/ChecklistPage';
import EditorPage from 'components/EditorPage/EditorPage';
import Header from './common/Header/Header';
import NotFound from './NotFound/NotFound';

const App = () => (
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

export default App;
