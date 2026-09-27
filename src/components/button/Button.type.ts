import type {ReactNode} from "react";

export type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    isSelected?: boolean;
    variant?: "primary" | "secondary";
    icon?:{
        position: 'left' | 'right';
        icon: ReactNode;
    }
    selectedContent?: string | ReactNode;
};