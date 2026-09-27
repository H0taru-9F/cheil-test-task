import Card from "@/components/card/Card.tsx";
import {type Landry} from "@/data/landry.ts";
import './Cards.style.scss'
import {useState} from "react";
import Text from "@/components/text/Text.tsx";
import Button from "@/components/button/Button.tsx";
import ArrowIcon from "@/components/button/arrow-icon/ArrowIcon.tsx";

type CardsProps = {
    products: Landry[];
}

export default function Cards({products}:CardsProps) {
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [isShowedAllCards, setIsShowedAllCards] = useState(false);

  const firstSixCards = products.slice(0, 6);

  const cards = isShowedAllCards ? products : firstSixCards

  const toggle = (id:number) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (selectedIds.has(id)) {
        selectedIds.delete(id);
      } else {
        selectedIds.add(id);
      }
      return next;
    });
  };

  return (
      <>
        <div className='cards__wraper'>
          <Text className='cards__description' variant='heading4' >Liczba wyników: {products.length}</Text>
        </div>
        <div className="cards">
          {cards.map((card) => (
            <Card key={card.id} data={card} isSelected={selectedIds.has(card.id)} onSelect={toggle} />
          ))}
        </div>
        <Button selectedContent='Pokaż mniej' isSelected={isShowedAllCards} className='cards__button' onClick={() => setIsShowedAllCards(!isShowedAllCards)} variant="secondary"
                icon={{
                    position: 'right',
                    icon: <ArrowIcon direction={!isShowedAllCards ? 'down' : 'up'} />
                }}
        >
          Pokaż więcej
        </Button>
      </>
  );
}
