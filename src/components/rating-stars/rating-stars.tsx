import React, {ChangeEvent} from 'react';
import {FetchStatus, RatingTitles} from '../../const';
import {selectSendReviewStatus} from '../../store/reviews-data/selectors';
import {useAppSelector} from '../../hooks/hooks';

interface RatingStarsProps {
  onRatingChange: (event: ChangeEvent<HTMLInputElement>) => void;
  currentRating: number;
}

function RatingStars({onRatingChange, currentRating}:RatingStarsProps):JSX.Element {
  const fetchSendReviewStatus = useAppSelector(selectSendReviewStatus);

  return (
    <>{
      RatingTitles.map((star, index) => {
        const realIndex = RatingTitles.length - index;
        return (
          <React.Fragment key={star}>
            <input className="form__rating-input visually-hidden"
              name="rating"
              id={`${realIndex}-stars`}
              type="radio"
              value={realIndex}
              checked={currentRating === realIndex}
              onChange={(event) => onRatingChange(event)}
              disabled={fetchSendReviewStatus === FetchStatus.Idle}
              data-testid='rating-star'
            >
            </input>
            <label
              htmlFor={`${realIndex}-stars`}
              className="reviews__rating-label form__rating-label"
              title={RatingTitles[index]}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        );
      })
    }
    </>
  );
}

export default RatingStars;
