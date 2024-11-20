import { Action } from 'redux';

export interface BaseAction<T extends string = any> extends Action<T> {
    payload?: any;
    key?: string;
}
