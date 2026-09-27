import Text from "@/components/text/Text.tsx";
import "./Price.style.scss";

type PriceProps = {
    value: number;
    currency: string;
};

export default function Price({ value, currency }: PriceProps) {

    const formatted = new Intl.NumberFormat('uk-UA').format(value)

    const [whole, decimal] = formatted.split(',');

    return (
        <Text as="span" variant="heading1" fontWeight='bold'>
            {whole}
            <sup className="price__decimal">
                {decimal??'00'}
                <span className="price__currency">{currency}</span>
            </sup>
        </Text>
    );
}
