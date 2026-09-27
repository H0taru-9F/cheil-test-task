export const getUniqueValues = <T,>(data: T[], key: keyof T): string[] => {
    return [...new Set(data.map(item => String(item[key])))];
};

export const getUniqueArrayValues = <T,>(data: T[], key: keyof T): string[] => {
    return [...new Set(data.flatMap(item => item[key] as string[]))];
};