import { PageConstants } from '@/lib/constants';
import { PAGE_SETTINGS_UPDATE, PageSettingsUpdateAction } from '../../types/redux/page/action_types';

export const setDarkMode = (isDark: boolean): PageSettingsUpdateAction => {
    localStorage.setItem(PageConstants.IS_DARK, isDark.toString());

    return {
        type: PAGE_SETTINGS_UPDATE,
        payload: {
            isDark
        }
    };
};
