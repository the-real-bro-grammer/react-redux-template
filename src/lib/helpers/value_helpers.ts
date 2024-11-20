export const isTrue = (value: string | null): boolean => {
    const truthy: string[] = ['true', 'True', '1'];

    return value != null && truthy.includes(value);
};
