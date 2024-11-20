import { BaseAction } from '@/types/redux/base_action';

export const PAGE_SETTINGS_UPDATE = 'PAGE_SETTINGS_UPDATE';

export interface PageSettingsUpdateAction extends BaseAction<typeof PAGE_SETTINGS_UPDATE> {}

export type PageSettingsAction = PageSettingsUpdateAction;
