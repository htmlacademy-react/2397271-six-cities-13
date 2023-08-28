import OfferCard from '../offer-card/offer-card';
import {OfferPreviewType} from '../../types/offer';

interface OfferListProps {
  offerList: OfferPreviewType[];
  className?: string;
  handleMouseEnter?: (value: OfferPreviewType) => void;
  handleMouseLeave?: () => void;
}

const OfferList = (props:OfferListProps):JSX.Element => {
  const {offerList, className, handleMouseEnter, handleMouseLeave} = props;

  return (
    <>
      {offerList.map((card) =>
        (
          <OfferCard
            key={card.id}
            card={card}
            className={className ?? className}
            onMouseEnter={() => handleMouseEnter && handleMouseEnter(card)}
            onMouseLeave={() => handleMouseLeave && handleMouseLeave()}
          />
        ))}
    </>
  );
};


export default OfferList;
