import React, {ReactNode} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OfferPreviewType} from '../../types/offer';

interface OfferListProps {
  offerList: OfferPreviewType[];
  className?: string;
  handleMouseEnter?: (value: OfferPreviewType) => void;
  testId?: string | undefined;
}

const OfferList = (props:OfferListProps):ReactNode => {
  const {offerList, className, handleMouseEnter, testId} = props;

  return offerList.map((card) =>
    (
      <OfferCard
        key={card.id}
        card={card}
        className={className ? className : ''}
        onMouseEnter={() => handleMouseEnter && handleMouseEnter(card)}
        testId={testId}
      >
      </OfferCard>
    )
  );
};


export default OfferList;
