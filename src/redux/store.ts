import { configureStore } from '@reduxjs/toolkit';
import { Store } from 'redux';
import { RootState } from '../types/redux/root_state';
import { initialRootState } from './initial_state';
import rootReducerWithLoader from './reducers';
import { ThunkArguments } from './thunk_arguments';
import { AppAction } from './types';

const thunkArgs: ThunkArguments = {};

const storeConfigured: Store<RootState, AppAction> = configureStore({
    reducer: rootReducerWithLoader,
    preloadedState: initialRootState,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: thunkArgs
            }
        })
});

export default storeConfigured;
