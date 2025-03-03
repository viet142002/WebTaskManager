import db from '@/assets/db/db.json';

type Query<T> = Partial<T>;
type ComparisonFn<T> = (itemValue: T, queryValue: T) => boolean;

const defaultComparisons = {
    equals: <T>(a: T, b: T) => a === b,
    includes: (a: string, b: string) => a.includes(b),
    greaterThan: (a: number, b: number) => a > b,
    lessThan: (a: number, b: number) => a < b,
};

export const fakeApi = <T extends keyof typeof db>(
    table: T,
    query: Query<(typeof db)[T][number]> = {},
    comparisonFn: Record<string, ComparisonFn<unknown>> = {}
): (typeof db)[T][number][]   => {
    return db[table].filter(item =>
        Object.entries(query).every(([key, value]) => {
            const itemValue = item[key as keyof typeof item];
            const compare = comparisonFn[key] || defaultComparisons.equals;
            return compare(itemValue, value);
        })
    );
};

export const delay = (delay = 1000): Promise<void> => {
    return new Promise(resolve => {
        const key = setTimeout(() => {
            resolve();
            clearTimeout(key);
        }, delay)
    })
}