import Filter from "@/components/filter/Filter.tsx";
import './Filters.style.scss'
import {useState} from "react";
import {filterConfig, sortOptions} from "@/layouts/filters/Filters.config.ts";
import {type Landry} from "@/data/landry.ts";
import {getUniqueArrayValues, getUniqueValues} from "@/utils/getUniqueValues.ts";

export type FilterProps = {
    products: Landry[];
    onFilter: (filteredProducts: Landry[]) => void;
}

type Filters = Partial<Record<keyof Landry, string>>;

export default function Filters({products, onFilter}: FilterProps ) {
    const [filters, setFilters] = useState<Filters>({});
    const [sortKey, setSortKey] = useState('');

    const applyFiltersAndSort = (
        newFilters: Partial<Filters>,
        newSortKey: string
    ) => {
        const result = products
            .filter(product =>
                filterConfig.every(({ key, isArray }) => {
                    const filterValue = newFilters[key];
                    if (!filterValue) return true;
                    if (isArray) return (product[key] as string[]).includes(filterValue);
                    return String(product[key]) === filterValue;
                })
            )
            .sort((a, b) => {
                if (!newSortKey) return 0;
                return sortOptions[newSortKey].fn(a, b);
            });

        onFilter(result);
    };

    const handleFilter = (key: keyof Landry) => (value: string) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        applyFiltersAndSort(newFilters, sortKey);
    };

    const handleSort = (label: string) => {
        const entry = Object.entries(sortOptions).find(([, v]) => v.label === label);
        const newSortKey = entry?.[0] ?? '';
        setSortKey(newSortKey);
        applyFiltersAndSort(filters, newSortKey);
    };

    return (
        <div className="filters">
            <Filter options={Object.values(sortOptions).map(v => v.label)}
            label='Sortuj po:'
            placeholder='Pokaż wszystkie'
            allLabel='Wszystkie'
            onChange={handleSort}
            />
            {filterConfig.map(({ key, label, placeholder, allLabel , isArray}) => (
                <Filter
                    key={key}
                    onChange={handleFilter(key)}
                    label={label}
                    placeholder={placeholder}
                    options={isArray ? getUniqueArrayValues(products, key) : getUniqueValues(products, key)}
                    allLabel={allLabel}/>
            ))}
        </div>
    )
}