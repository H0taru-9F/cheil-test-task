import Card from "@/components/card/Card.tsx";
import {data} from "@/data/landry.ts";
import './Cards.style.scss'

export default function Cards() {

  const firstSixCards = data.slice(0, 6);

  return (
    <div className="cards">
      {firstSixCards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
}