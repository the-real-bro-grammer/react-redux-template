import { PAGE_SETTINGS_UPDATE, PageSettingsAction } from '../../types/redux/page/action_types';
import { PageSettingsState } from '../../types/redux/page/state';
import { getInitialPageSettingsState } from './initial_state';

export const pageSettingsReducer = (
    state = getInitialPageSettingsState(),
    action: PageSettingsAction
): PageSettingsState => {
    const { type, payload } = action;

    switch (type) {
        case PAGE_SETTINGS_UPDATE:
            return {
                ...state,
                ...payload
            };
        default:
            return {
                ...state
            };
    }
};
