import {OfferPreviewProps} from '../../types/offerProps';

export interface OfferCardProps {
  card: OfferPreviewProps;
  className?: string;
  onMouseEnter?: (card:OfferPreviewProps) => void;
}
