import React, {ReactNode, useState} from 'react';
import {RatingTitles} from '../../const';


function CommentForm():ReactNode {
  const [comment, setComment] = useState({rating: 0, review: ''});

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RatingTitles.map((star, index) => (
            <React.Fragment key={star}>
              <input className="form__rating-input visually-hidden"
                name="rating"
                id={`${index}-stars`}
                type="radio"
                value={index}
                onChange={(event) => setComment((prevComment) => ({...prevComment, rating: event.target.value}))}
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
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(event) => setComment({...comment, review: event.target.value})}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
