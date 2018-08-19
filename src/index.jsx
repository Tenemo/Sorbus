import React from 'react';
import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import Root from './Root';
// import { persistStore } from 'redux-persist';
const store = configureStore();
// let persistor = persistStore(store);

render(
    (
        <Root
            store={store}
            history={history}
        />
    ),
    document.getElementById('app')
);