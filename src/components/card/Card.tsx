import './Card.style.scss'
import type {CardProps} from "@/components/card/Card.type.ts";
import Image from "@/components/image/Image.tsx";
import Text from "@/components/text/Text.tsx";
import Button from "@/components/button/Button.tsx";
import EnergyLabel from "@/components/card/energy-label/EnergyLabel.tsx";
import Price from "@/components/card/price/Price.tsx";
import Description from "@/components/card/description/Description.tsx";

export default function Card({ data, isSelected, onSelect }: CardProps) {

    const isMonthPayment = data.installments.isAvailable

  const pricePerMonth = isMonthPayment ? `${(data.price / data.installments.monthsCount).toFixed(2)} zł x ${data.installments.monthsCount} rat` : null;

  return (
    <div className="card">
      <Image src={data.image} alt={`${data.model} ${data.series}`} className='card__image' />
        <div className="card__details">
      <Text fontWeight='bold'>{data.model}, {data.series}, {data.capacity}, {data.color}</Text>
      <br />
            <Description capacity={data.capacity} dimensions={data.dimensions} features={data.features} />
        <div className="card__energy-label">
            <Text grayColor variant='caption' as="span">Klasa energetyczna:</Text>{" "}
            <EnergyLabel letter={data.energyClass} />
        </div>
      <Text grayColor variant='caption' as="span">Cena obowiązuje: {data.priceValid.startDate} - {data.priceValid.endDate}</Text>
        <br/>
        <Price value={data.price} currency={data.currency} />
      {isMonthPayment && (
        <Text className="card__price-per-month" grayColor fontWeight='bold'>{pricePerMonth}</Text>
      )}
        </div>
      <Button isSelected={isSelected} onClick={() => onSelect(data.id)} selectedContent='Wybrane' className='card__button'>wybierz</Button>
    </div>
  )
}