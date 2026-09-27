type ArrowIconProps = {
    direction?: 'up' | 'down';
    className?: string;
    color?: string;
};

export default function ArrowIcon({ direction = 'down', className, color }: ArrowIconProps) {
    return (
        <svg
            width="7"
            height="6"
            viewBox="0 0 7 6"
            fill="none"
            style={{
                transform: direction === 'up' ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
            }}
            className={className}
        >
            <path d="M3.03101 5.25L6.06209 0H-8.29697e-05L3.03101 5.25Z" fill={color? color : "#007AFF"}/>
        </svg>
    );
}