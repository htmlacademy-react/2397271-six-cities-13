import React, {ChangeEvent} from 'react';
import {RatingTitles} from '../../const';

interface RatingStarsProps {
  handleRatingChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function RatingStars({handleRatingChange}:RatingStarsProps) {
  return (
    <>
      {
        RatingTitles.map((star, index) => (
          <React.Fragment key={star}>
            <input className="form__rating-input visually-hidden"
              name="rating"
              id={`${index}-stars`}
              type="radio"
              value={RatingTitles.length - index}
              onChange={(event) => handleRatingChange(event)}
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
