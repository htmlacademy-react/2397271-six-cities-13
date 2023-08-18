import React, {ReactNode} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OfferPreviewType} from '../../types/offer';

interface OfferListProps {
  offerList: OfferPreviewType[];
  className?: string;
  handleMouseEnter?: (value: OfferPreviewType) => void;
}

const OfferList = (props:OfferListProps):ReactNode => {
  const {offerList, className, handleMouseEnter} = props;

  return offerList.map((card) =>
    (
      <OfferCard
        key={card.id}
        card={card}
        className={className ? className : ''}
        onMouseEnter={() => handleMouseEnter && handleMouseEnter(card)}
      >
      </OfferCard>
    )
  );
};


export default OfferList;
