import React, {ReactNode, useState} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OfferPreviewProps} from '../../types/offer-props';

interface OfferListProps {
  offerList: OfferPreviewProps[];
  className?: string;
}

function OfferList({offerList, className}:OfferListProps):ReactNode {
  const [activeCard, setActiveCard] = useState({});
  window.activeCard = activeCard;

  return (
    <>
      {offerList.map((card): ReactNode =>
        (<OfferCard key={card.id} card={card} className={className ? className : ''} onMouseEnter={setActiveCard}/>)
      )}
    </>
  );
}

export default OfferList;
