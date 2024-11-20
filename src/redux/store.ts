import { configureStore } from '@reduxjs/toolkit';
import { Store } from 'redux';
import { AppAction } from '../types/redux/action_types';
import { RootState } from '../types/redux/root_state';
import { initialRootState } from './initial_state';
import { pageSettingsReducer } from './page/reducers';
import { ThunkArguments } from './thunk_arguments';

const thunkArgs: ThunkArguments = {};

const reducer = {
    pageSettingsState: pageSettingsReducer
};

const storeConfigured: Store<RootState, AppAction> = configureStore({
    reducer,
    preloadedState: initialRootState,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: thunkArgs
            }
        })
});

export default storeConfigured;
