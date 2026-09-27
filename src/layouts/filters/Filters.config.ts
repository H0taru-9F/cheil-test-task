import type {Landry} from "@/data/landry.ts";

export type FilterConfig = {
    key: keyof Landry;
    label: string;
    placeholder: string;
    allLabel: string;
    isArray?: boolean;
};

export const filterConfig: FilterConfig[] = [
    { key: 'features', label: 'Funkcje:', placeholder: 'Pokaż wszystkie', allLabel: 'Wszystkie', isArray: true },
    { key: 'energyClass', label: 'Klasa energetyczna:', placeholder: 'Pokaż wszystkie', allLabel: 'Wszystkie' },
    { key: 'capacity', label: 'Pojemność:', placeholder: 'Pokaż wszystkie', allLabel: 'Wszystkie' },
];

export type SortConfig = {
    label: string;
    fn: (a: Landry, b: Landry) => number;
};

export const sortOptions: Record<string, SortConfig> = {
    capacity: {
        label: 'Pojemność',
        fn: (a, b) => parseFloat(b.capacity) - parseFloat(a.capacity)
    },
    price: {
        label: 'Cena',
        fn: (a, b) => a.price - b.price
    },
    popularity: {
        label: 'Popularność',
        fn: (a, b) => b.id - a.id
    }
}