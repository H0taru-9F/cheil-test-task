import Text from "@/components/text/Text.tsx";
import "@/components/button/Button.style.scss";
import type {ButtonProps} from "@/components/button/Button.type.ts";

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