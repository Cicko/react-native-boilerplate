/**
 *
 * @author Rudolf Cicko
 * @email rudolfcickodev@gmail.com
 * @date 09.01.19
 *
 */
import {
    assign,
} from 'lodash';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    createStore as createReduxStore,
    applyMiddleware,
    compose,
} from 'redux';
import {
    createEpicMiddleware,
    combineEpics,
} from 'redux-observable';
import { getEnv } from '../../util';
import { rootReducer } from '../../../app/store';

class StoreService {
    /**
     * Store constructor
     */
    constructor() {
        this.reduxStore = null;
        this.reducerRegistry = {};
    }

    /**
     * Redux trigger
     * @param trigger
     * @returns {string}
     */
    static trigger(trigger) {
        return `lib/services/Store.${trigger}`;
    }

    /**
     * Create the store
     * @param state : Object : The default state
     */
    createStore = (state = {}) => {
        this.reduxStore = createReduxStore(rootReducer, {}, composeWithDevTools());

        return this.reduxStore;
    };

    /**
     * Dispatch an action
     * @param action
     * @param trigger
     */
    dispatch(action, trigger = null) {
        if (!this.reduxStore) {
            return null;
        }
        return this.reduxStore.dispatch(trigger ? assign(action, { trigger }) : action);
    }
}

export default new StoreService;
