import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import logger from 'redux-logger'
import FirstContainer from './containers/FirstContainer.js'

const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger());
}

const finalCreateStore = applyMiddleware(...middlewares)(createStore);
let store = finalCreateStore(reducer);

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <FirstContainer />
            </Provider>
        );
    }
}
