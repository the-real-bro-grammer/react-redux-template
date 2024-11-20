import { RootState } from '../types/redux/root_state';
import { getInitialPageSettingsState } from './page/initial_state';

export const initialRootState: RootState = {
    pageSettingsState: getInitialPageSettingsState()
};
