import OfferCard from '../offer-card/offer-card';
import {OfferPreviewType} from '../../types/offer';

interface OfferListProps {
  offerList: OfferPreviewType[];
  className?: string;
  onMouseEnter?: (value: OfferPreviewType) => void;
  onMouseLeave?: () => void;
}

const OfferList = (props:OfferListProps):JSX.Element => {
  const {offerList, className, onMouseEnter, onMouseLeave} = props;

  return (
    <>
      {offerList.map((card) =>
        (
          <OfferCard
            key={card.id}
            card={card}
            className={className ?? className}
            onMouseEnter={() => onMouseEnter && onMouseEnter(card)}
            onMouseLeave={() => onMouseLeave && onMouseLeave()}
          />
        ))}
    </>
  );
};


export default OfferList;
