import { FC } from 'react';
import IReactLayoutProps from './layout_props';

export interface ReactLayout<TProps extends IReactLayoutProps> extends FC<TProps> {}
