import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';

const Root = (props) => {
    const { store, history } = props;
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    );
};

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    // persistor: PropTypes.object.isRequired
};

export default hot(module)(Root);
