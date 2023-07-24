import React, {ReactNode} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OfferPreviewType} from '../../types/offer';

interface OfferListProps {
  offerList: OfferPreviewType[];
  className?: string;
  handleMouseEnter?: (value: OfferPreviewType) => void;
}

function OfferList({offerList, className, handleMouseEnter}:OfferListProps):ReactNode {
  return (
    offerList.map((card): ReactNode =>
      (
        <OfferCard
          key={card.id}
          card={card}
          className={className ? className : ''}
          onMouseEnter={() => handleMouseEnter && handleMouseEnter(card)}
        >
        </OfferCard>
      )
    )
  );
}

export default OfferList;
