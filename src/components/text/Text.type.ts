import type {ReactNode} from "react";

export type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"| "p" | "span";
export type TextVariant = "heading1" | "heading2" | "heading3" | "heading4" | "subheading" | "body" | "caption" | "button";
export type TextWeight = "regular" | "bold";

export type TextProps = {
  children: ReactNode;
  className?: string;
  as?: TextTag;
  variant?: TextVariant;
  fontWeight?: TextWeight;
  grayColor?: boolean;
};