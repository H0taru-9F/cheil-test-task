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

export const data: Landry[] = [
    {
        id: 1,
        image: landry1,
        model: 'WW90T754ABT',
        series: 'Pralka QuickDrive™',
        capacity: '9 kg',
        color: 'Biała',
        dimensions: { depth: 55, width: 60, height: 85 },
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'A',
        price: 3199.00,
        currency: 'zł',
        priceValid: { startDate: '2023.09.15', endDate: '2023.09.21' },
        installments: { isAvailable: true, monthsCount: 60 },
    },
    {
        id: 2,
        image: landry2,
        model: 'WW10T654DLH',
        series: 'Pralka EcoBubble™',
        capacity: '10.5 kg',
        color: 'Biała',
        dimensions: { depth: 55, width: 60, height: 85 },
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'B',
        price: 3499.00,
        currency: 'zł',
        priceValid: { startDate: '2023.09.15', endDate: '2023.09.21' },
        installments: { isAvailable: true, monthsCount: 60 },
    },
    {
        id: 3,
        image: landry1,
        model: 'WW90T654DLH',
        series: 'Pralka EcoBubble™',
        capacity: '9 kg',
        color: 'Biała',
        dimensions: { depth: 55, width: 60, height: 85 },
        features: ['Panel AI Control', 'Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'C',
        price: 2899.00,
        currency: 'zł',
        priceValid: { startDate: '2023.09.15', endDate: '2023.09.21' },
        installments: { isAvailable: true, monthsCount: 60 },
    },
    {
        id: 4,
        image: landry2,
        model: 'WW80T554DAW',
        series: 'Pralka QuickDrive™',
        capacity: '8 kg',
        color: 'Czarna',
        dimensions: { depth: 55, width: 60, height: 85 },
        features: ['Silnik inwerterowy', 'Wyświetlacz elektroniczny'],
        energyClass: 'D',
        price: 2599.00,
        currency: 'zł',
        priceValid: { startDate: '2023.09.15', endDate: '2023.09.21' },
        installments: { isAvailable: false, monthsCount: 0 },
    },
    {
        id: 5,
        image: landry1,
        model: 'WW10T654DLH',
        series: 'Pralka EcoBubble™',
        capacity: '10.5 kg',
        color: 'Biała',
        dimensions: { depth: 60, width: 60, height: 85 },
        features: ['Drzwi AddWash™', 'Silnik inwerterowy'],
        energyClass: 'E',
        price: 3199.99,
        currency: 'zł',
        priceValid: { startDate: '2023.09.15', endDate: '2023.09.21' },
        installments: { isAvailable: true, monthsCount: 48 },
    },
    {
        id: 6,
        image: landry2,
        model: 'WW90T654DLH',
        series: 'Pralka EcoBubble™',
        capacity: '8 kg',
        color: 'Biała',
        dimensions: { depth: 45, width: 60, height: 85 },
        features: ['Panel AI Control', 'Wyświetlacz elektroniczny'],
        energyClass: 'F',
        price: 1999.00,
        currency: 'zł',
        priceValid: { startDate: '2023.09.15', endDate: '2023.09.21' },
        installments: { isAvailable: true, monthsCount: 36 },
    },
    {
        id: 7,
        image: landry1,
        model: 'WW70T502DAW',
        series: 'Pralka QuickDrive™',
        capacity: '7 kg',
        color: 'Biała',
        dimensions: { depth: 45, width: 60, height: 85 },
        features: ['Silnik inwerterowy'],
        energyClass: 'A',
        price: 1799.00,
        currency: 'zł',
        priceValid: { startDate: '2023.09.15', endDate: '2023.09.21' },
        installments: { isAvailable: false, monthsCount: 0 },
    },
    {
        id: 8,
        image: landry2,
        model: 'WW80T554DAW',
        series: 'Pralka EcoBubble™',
        capacity: '8 kg',
        color: 'Czarna',
        dimensions: { depth: 55, width: 60, height: 85 },
        features: ['Drzwi AddWash™', 'Panel AI Control', 'Silnik inwerterowy'],
        energyClass: 'B',
        price: 2799.00,
        currency: 'zł',
        priceValid: { startDate: '2023.09.15', endDate: '2023.09.21' },
        installments: { isAvailable: true, monthsCount: 24 },
    },
    {
        id: 9,
        image: landry1,
        model: 'WW70T502DAW',
        series: 'Pralka QuickDrive™',
        capacity: '7 kg',
        color: 'Czarna',
        dimensions: { depth: 45, width: 60, height: 85 },
        features: ['Wyświetlacz elektroniczny', 'Silnik inwerterowy'],
        energyClass: 'C',
        price: 1599.00,
        currency: 'zł',
        priceValid: { startDate: '2023.09.15', endDate: '2023.09.21' },
        installments: { isAvailable: true, monthsCount: 12 },
    },
]
