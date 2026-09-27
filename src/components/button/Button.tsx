import Text from "@/components/text/Text.tsx";
import type {ReactNode} from "react";
import "./Button.style.scss";

type ButtonProps = {
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

export default function Button({ children, onClick, className, isSelected = false, variant = 'primary', icon, selectedContent = children }: ButtonProps) {
    return (
    <button className={`button button__${variant} button__${variant}--${isSelected ? 'selected' : ''} ${className ?? ""}`} onClick={onClick}>
        {icon?.position === 'left' && icon.icon}
        <Text fontWeight="bold" variant='button'>
          {isSelected ? selectedContent : children}
      </Text>
        {icon?.position === 'right' && icon.icon}
    </button>
  )
}