import { BaseAction } from './base_action';
import { PageSettingsAction } from './page/action_types';

export type AppAction = PageSettingsAction | BaseAction;
