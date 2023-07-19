import React, {ReactNode, useState} from 'react';
import {OfferDataProps} from '../OfferCard/OfferDataProps';
import OfferCard from '../OfferCard';

interface OfferListProps {
  offerData: OfferDataProps[];
  className?: string;
}

function OfferList({offerData, className}:OfferListProps):ReactNode {
  const [activeCard, setActiveCard] = useState({});
  window.activeCard = activeCard;

  return (
    <>
      {offerData.map((card): ReactNode =>
        (<OfferCard key={card.id} card={card} className={className} onMouseEnter={setActiveCard}/>)
      )}
    </>
  );
}

export default OfferList;
