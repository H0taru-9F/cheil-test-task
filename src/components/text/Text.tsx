import type {TextProps} from "@/components/text/Text.type.ts";
import "./Text.style.scss";

export default function Text({ children, variant = "body", className, as: Component = "p", fontWeight='regular', grayColor }: TextProps) {

  const defaultColor = grayColor ? '#767676' : "";

  return (
    <Component className={`text text__${variant} text--${fontWeight} ${className ?? ""}`} style={{ color: defaultColor }}>
      {children}
    </Component>
  )
}