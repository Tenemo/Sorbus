import { createStore, applyMiddleware, compose } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { routerMiddleware, connectRouter } from 'connected-react-router/immutable';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
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
        reactRouterMiddleware,
    ];
    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        // persistedReducer,
        connectRouter(history)(rootReducer),
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware),
        ),
    );
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default; // eslint-disable-line global-require
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
            applyMiddleware(...middleware),
        ),
    );
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
