type EnergyLabelProps = {
    letter: string;
}

const labelColors: Record<string, string> = {
    A: '#2e9e44',
    B: '#8bc53f',
    C: '#f9c22e',
    D: '#f6921e',
    E: '#f15a29',
    F: '#ed1c24',
    G: '#c1272d',
};

export default function EnergyLabel({ letter }: EnergyLabelProps) {

    return (
        <svg width="49" height="18" viewBox="0 0 49 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 17V1C0 0.447715 0.447716 0 1 0H42.4648C42.7992 0 43.1114 0.167102 43.2969 0.4453L48.6302 8.4453C48.8541 8.7812 48.8541 9.2188 48.6302 9.5547L43.2969 17.5547C43.1114 17.8329 42.7992 18 42.4648 18H1C0.447715 18 0 17.5523 0 17Z"
                fill={labelColors[letter]}
            />
            <text
                x="10"
                y="13"
                fill="#fff"
                fontSize="12"
                fontWeight="700"
                fontFamily="var(--sans)"
                textAnchor="middle"
            >
                {letter}
            </text>
        </svg>
    );
}