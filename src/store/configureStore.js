import { createStore, applyMiddleware, compose } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import { routerMiddleware, connectRouter } from 'connected-react-router/immutable';
import createHistory from 'history/createBrowserHistory';
// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['ajaxCallsInProgress']
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
export const history = createHistory();

function configureStoreDev(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middleware = [
        reactRouterMiddleware
    ];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
    const store = createStore(
        // persistedReducer,
        connectRouter(history)(rootReducer),
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(connectRouter(history)(nextReducer));
        });
    }
    return store;
}

function configureStoreProd(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middleware = [
        reactRouterMiddleware,
    ];

    return createStore(
        // persistedReducer,
        connectRouter(history)(rootReducer),
        initialState,
        compose(
            applyMiddleware(...middleware)
    )
    );
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;