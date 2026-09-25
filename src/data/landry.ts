import landry1 from '../assets/laundry-t1.png';
import landry2 from '../assets/laundry-t2.png';

export type Landry = {
    id: number;
    image: string;
    model: string;
    series: string;
    capacity: string;
    color: string;
    dimensions: {
        depth: number;
        width: number;
        height: number;
    };
    features: string[];
    energyClass: string;
    price: number;
    currency: string;
    priceValid: {
        startDate: string;
        endDate: string;
    };
    installments: {
        isAvailable: boolean;
        monthsCount: number;
    };
};

export const data:Landry[] = [
    {
        id: 1,
        image: landry1,
        model: 'WW90T754ABT',
        series: 'Pralka QuickDrive™',
        capacity: '9 kg',
        color: 'Biała',
        dimensions: {
            depth: 55,
            width: 60,
            height: 85
        },
        features: [
            "Drzwi AddWash™",
            "Panel AI Control",
            "Silnik inwerterowy",
            "Wyświetlacz elektroniczny"
        ],
        energyClass: 'A',
        price: 3199.00,
        currency: 'zł',
        priceValid: {
            startDate: '2023.01.01',
            endDate: '2023.12.31'
        },
        installments: {
            isAvailable: true,
            monthsCount: 60,
        },
    },
    {
        id: 2,
        image: landry2,
        model: 'WW90T754ABT',
        series: 'Pralka QuickDrive™',
        capacity: '9 kg',
        color: 'Biała',
        dimensions: {
            depth: 55,
            width: 60,
            height: 85
        },
        features: [
            "Drzwi AddWash™",
            "Panel AI Control",
            "Silnik inwerterowy",
            "Wyświetlacz elektroniczny"
        ],
        energyClass: 'A',
        price: 3199.00,
        currency: 'zł',
        priceValid: {
            startDate: '2023.01.01',
            endDate: '2023.12.31'
        },
        installments: {
            isAvailable: true,
            monthsCount: 60,
        },
    },
    {
        id: 3,
        image: landry1,
        model: 'WW90T754ABT',
        series: 'Pralka QuickDrive™',
        capacity: '9 kg',
        color: 'Biała',
        dimensions: {
            depth: 55,
            width: 60,
            height: 85
        },
        features: [
            "Drzwi AddWash™",
            "Panel AI Control",
            "Silnik inwerterowy",
            "Wyświetlacz elektroniczny"
        ],
        energyClass: 'A',
        price: 3199.00,
        currency: 'zł',
        priceValid: {
            startDate: '2023.01.01',
            endDate: '2023.12.31'
        },
        installments: {
            isAvailable: true,
            monthsCount: 60,
        },
    },
    {
        id: 4,
        image: landry1,
        model: 'WW90T754ABT',
        series: 'Pralka QuickDrive™',
        capacity: '9 kg',
        color: 'Biała',
        dimensions: {
            depth: 55,
            width: 60,
            height: 85
        },
        features: [
            "Drzwi AddWash™",
            "Panel AI Control",
            "Silnik inwerterowy",
            "Wyświetlacz elektroniczny"
        ],
        energyClass: 'D',
        price: 3199.99,
        currency: 'zł',
        priceValid: {
            startDate: '2023.01.01',
            endDate: '2023.12.31'
        },
        installments: {
            isAvailable: true,
            monthsCount: 60,
        },
    },
    {
        id: 5,
        image: landry1,
        model: 'WW90T754ABT',
        series: 'Pralka QuickDrive™',
        capacity: '9 kg',
        color: 'Biała',
        dimensions: {
            depth: 55,
            width: 60,
            height: 85
        },
        features: [
            "Drzwi AddWash™",
            "Panel AI Control",
            "Silnik inwerterowy",
            "Wyświetlacz elektroniczny"
        ],
        energyClass: 'A',
        price: 3199.00,
        currency: 'zł',
        priceValid: {
            startDate: '2023.01.01',
            endDate: '2023.12.31'
        },
        installments: {
            isAvailable: true,
            monthsCount: 60,
        },
    },
    {
        id: 6,
        image: landry1,
        model: 'WW90T754ABT',
        series: 'Pralka QuickDrive™',
        capacity: '9 kg',
        color: 'Biała',
        dimensions: {
            depth: 55,
            width: 60,
            height: 85
        },
        features: [
            "Drzwi AddWash™",
            "Panel AI Control",
            "Silnik inwerterowy",
            "Wyświetlacz elektroniczny"
        ],
        energyClass: 'A',
        price: 3199.00,
        currency: 'zł',
        priceValid: {
            startDate: '2023.01.01',
            endDate: '2023.12.31'
        },
        installments: {
            isAvailable: true,
            monthsCount: 60,
        },
    },
    {
        id: 7,
        image: landry1,
        model: 'WW90T754ABT',
        series: 'Pralka QuickDrive™',
        capacity: '9 kg',
        color: 'Biała',
        dimensions: {
            depth: 55,
            width: 60,
            height: 85
        },
        features: [
            "Drzwi AddWash™",
            "Panel AI Control",
            "Silnik inwerterowy",
            "Wyświetlacz elektroniczny"
        ],
        energyClass: 'A',
        price: 3199.00,
        currency: 'zł',
        priceValid: {
            startDate: '2023.01.01',
            endDate: '2023.12.31'
        },
        installments: {
            isAvailable: true,
            monthsCount: 60,
        },
    },
    {
        id: 8,
        image: landry1,
        model: 'WW90T754ABT',
        series: 'Pralka QuickDrive™',
        capacity: '9 kg',
        color: 'Biała',
        dimensions: {
            depth: 55,
            width: 60,
            height: 85
        },
        features: [
            "Drzwi AddWash™",
            "Panel AI Control",
            "Silnik inwerterowy",
            "Wyświetlacz elektroniczny"
        ],
        energyClass: 'A',
        price: 3199.00,
        currency: 'zł',
        priceValid: {
            startDate: '2023.01.01',
            endDate: '2023.12.31'
        },
        installments: {
            isAvailable: true,
            monthsCount: 60,
        },
    },
    {
        id: 9,
        image: landry1,
        model: 'WW90T754ABT',
        series: 'Pralka QuickDrive™',
        capacity: '9 kg',
        color: 'Biała',
        dimensions: {
            depth: 55,
            width: 60,
            height: 85
        },
        features: [
            "Drzwi AddWash™",
            "Panel AI Control",
            "Silnik inwerterowy",
            "Wyświetlacz elektroniczny"
        ],
        energyClass: 'A',
        price: 3199.00,
        currency: 'zł',
        priceValid: {
            startDate: '2023.01.01',
            endDate: '2023.12.31'
        },
        installments: {
            isAvailable: true,
            monthsCount: 60,
        },
    }
]
