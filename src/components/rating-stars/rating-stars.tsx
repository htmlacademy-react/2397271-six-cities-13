import React, {ChangeEvent} from 'react';
import {FetchStatus, RatingTitles} from '../../const';
import {selectSendReviewStatus} from '../../store/reviews-data/selectors';
import {useAppSelector} from '../../hooks';

interface RatingStarsProps {
  handleRatingChange: (event: ChangeEvent<HTMLInputElement>) => void;
  currentRating: number;
}

function RatingStars({handleRatingChange, currentRating}:RatingStarsProps):JSX.Element {
  const fetchSendReviewStatus = useAppSelector(selectSendReviewStatus);

  return (
    <>{
      RatingTitles.map((star, index) => (
        <React.Fragment key={star}>
          <input className="form__rating-input visually-hidden"
            name="rating"
            id={`${index}-stars`}
            type="radio"
            value={RatingTitles.length - index}
            checked={currentRating === RatingTitles.length - index}
            onChange={(event) => handleRatingChange(event)}
            disabled={fetchSendReviewStatus === FetchStatus.Idle}
            data-testid='rating-star'
          >
          </input>
          <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </React.Fragment>
      ))
    }
    </>
  );
}

export default RatingStars;
