import { PageConstants } from '@/lib/constants';
import { getValueFromStorage } from '@/lib/helpers/storage_helpers';
import { isTrue } from '@/lib/helpers/value_helpers';
import { PageSettingsState } from '../../types/redux/page/state';

export const getInitialPageSettingsState = (): PageSettingsState => {
    const initialState: PageSettingsState = {
        isDark: isTrue(getValueFromStorage(PageConstants.IS_DARK)),
        isLoaded: true
    };

    return initialState;
};
