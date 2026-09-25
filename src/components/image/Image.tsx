import './Image.style.scss'

export type ImageProps = {
  alt: string;
  src: string;
  className?: string;
}

export default function Image({ src, alt, className }: ImageProps) {
  return (
    <img alt={`${alt}-Image`} src={src} className={`image ${className ?? ''}`} />
  )
}