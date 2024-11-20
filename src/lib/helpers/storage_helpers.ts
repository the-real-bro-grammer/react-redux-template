export const getValueFromStorage = (prop: string, defaultValue = ''): string => {
    const canUseStorage = typeof Storage !== 'undefined';

    return canUseStorage ? (localStorage.getItem(prop) ?? defaultValue) : defaultValue;
};

export const getTypeValueFromStorage = <TValue>(prop: string, defaultValue: TValue): TValue => {
    const canUseStorage = typeof Storage !== 'undefined';

    return canUseStorage ? ((localStorage.getItem(prop) as TValue) ?? defaultValue) : defaultValue;
};

export const setValueInStorage = (prop: string, value: string) => {
    const canUseStorage = typeof Storage !== 'undefined';

    if (canUseStorage) {
        localStorage.setItem(prop, value);
    }
};

export const clearStorageCategory = (category: any) => {
    const canUseStorage = typeof Storage !== 'undefined';
    if (!canUseStorage) {
        return;
    }

    const keys = Object.keys(category);
    for (const key of keys) {
        localStorage.removeItem(category[key]);
    }
};
