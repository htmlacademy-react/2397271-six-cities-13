import React, {ReactNode} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OfferPreviewProps} from '../../types/offer-props';

interface OfferListProps {
  offerList: OfferPreviewProps[];
  className?: string;
  handleMouseEnter?: (value: OfferPreviewProps) => void;
}

function OfferList({offerList, className, handleMouseEnter}:OfferListProps):ReactNode {
  return (
    <>
      {offerList.map((card): ReactNode =>
        (
          <OfferCard
            key={card.id}
            card={card}
            className={className ? className : ''}
            onMouseEnter={() => handleMouseEnter && handleMouseEnter(card)}
          >
          </OfferCard>
        )
      )}
    </>
  );
}

export default OfferList;
