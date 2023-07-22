import React, {ChangeEvent, ReactNode, useState} from 'react';
import RatingStars from '../rating-stars/rating-stars';

function CommentForm():ReactNode {
  const [comment, setComment] = useState({rating: '0', review: ''});

  const handleRatingChange = (event:ChangeEvent<HTMLInputElement>):void => {
    setComment((prevComment) => ({...prevComment, rating: event.target.value}));
  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingStars handleRatingChange={handleRatingChange} />
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
