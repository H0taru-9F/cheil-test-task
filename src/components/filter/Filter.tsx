import '@/components/filter/Filter.style.scss'
import type {FilterProps} from "@/components/filter/Filter.type.ts";
import Text from "@/components/text/Text.tsx";
import {useEffect, useRef, useState} from "react";
import ArrowIcon from "@/components/button/arrow-icon/ArrowIcon.tsx";


export default function Filter({onChange, label, placeholder, options, allLabel}:FilterProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!dropdownRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

    const handleSelect = (value: string) => {
        setSelected(value);
        onChange(value);
        setIsOpen(false);
    };

    return (
        <div className="filter">
            <Text variant='body' fontWeight='bold'>{label}</Text>
            <div className="filter__dropdown" ref={dropdownRef}>
                <button type='button' className="filter__trigger" onClick={() => setIsOpen(prev => !prev)}>
                    <Text variant='heading4'>
                        {selected || placeholder}
                    </Text>
                    <ArrowIcon direction='down' className='filter__trigger-icon' color='#8b888c' />
                </button>
                {isOpen && (
                    <ul className="filter__menu">
                        <li
                            className={selected === '' ? 'filter__menu-item--selected' : ''}
                            onClick={() => handleSelect('')}
                        >
                            <Text variant='heading4' >
                                {allLabel}
                            </Text>
                        </li>

                        {options.map((option) => (
                            <li
                                key={option}
                                className={selected === option ? 'filter__menu-item--selected' : ''}
                                onClick={() => handleSelect(option)}
                            >
                                <Text variant='heading4' >
                                    {option}
                                </Text>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
  )
}