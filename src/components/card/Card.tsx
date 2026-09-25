import './Card.style.scss'
import type {CardProps} from "@/components/card/Card.type.ts";
import Image from "@/components/image/Image.tsx";
import Text from "@/components/text/Text.tsx";
import Button from "@/components/button/Button.tsx";
import EnergyLabel from "@/components/energy-label/EnergyLabel.tsx";
import Price from "@/components/card/price/Price.tsx";

export default function Card({ data }: CardProps) {

  const pricePerMonth = data.installments.isAvailable ? `${(data.price / data.installments.monthsCount).toFixed(2)} zł x ${data.installments.monthsCount} rat` : null;

  return (
    <div className="card">
      <Image src={data.image} alt={`${data.model} ${data.series}`} />
        <div className="card__details">
      <Text >{data.model}, {data.series}, {data.capacity}, {data.color}</Text>
      <br />
          <Text grayColor variant='caption' as="span" >Pojemność (kg):</Text>
          <Text variant='caption' as="span" fontWeight='bold'> {data.capacity}</Text>
          <br/>
        <Text grayColor variant='caption' as="span">Wymiary (GxSxW):</Text>
          <Text variant='caption' as="span" fontWeight='bold'> {data.dimensions.depth} x {data.dimensions.width} x {data.dimensions.height} cm</Text>
          <br/>
        <Text grayColor variant='caption' as="span">Funkcje:</Text>
          <Text variant='caption' as="span" fontWeight='bold'> {data.features.join(', ')}</Text>
        <div className="card__energy-label">
            <Text grayColor variant='caption' as="span">Klasa energetyczna:</Text>{" "}
            <EnergyLabel letter={data.energyClass} />
        </div>
      <Text grayColor variant='caption' as="span">Cena obowiązuje: {data.priceValid.startDate} - {data.priceValid.endDate}</Text>
        <br/>
        <Price value={data.price} currency={data.currency} />
      {data.installments.isAvailable && (
        <Text grayColor fontWeight='bold'>{pricePerMonth}</Text>
      )}
        </div>
      <Button>wybierz</Button>
    </div>
  )
}