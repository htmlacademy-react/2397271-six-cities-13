import React, {ChangeEvent, FormEvent, ReactNode, useState} from 'react';
import RatingStars from '../rating-stars/rating-stars';
import {toast} from 'react-toastify';
import {ReviewFormType} from '../../types/offer';
import {CommentErrors, CommentTextLength} from '../../const';


const validateReviewForm = ({comment, rating}:ReviewFormType) => {
  let state = true;

  if (comment.length > CommentTextLength.max) {
    toast.error(CommentErrors.tooLongText, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    state = false;
  }
  if (comment.length < CommentTextLength.min) {
    toast.error(CommentErrors.tooShortText, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    state = false;
  }
  if (rating === '0') {
    toast.error(CommentErrors.emptyRating, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    state = false;
  }

  return state;
};

function CommentForm():ReactNode {
  const [review, setReview] = useState({rating: '0', comment: ''});

  const handleRatingChange = (event:ChangeEvent<HTMLInputElement>):void => {
    setReview((prevReview) => ({...prevReview, rating: event.target.value}));
  };

  const handleReviewInput = (event:ChangeEvent<HTMLTextAreaElement>):void => {
    setReview({...review, comment: event.target.value});
  };

  const handleFormSubmit = (event:FormEvent<HTMLFormElement>):void => {
    event.preventDefault();

    if (!validateReviewForm(review)) {

    }
  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(event) => handleFormSubmit(event)}
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
        onChange={(event) => handleReviewInput(event)}
        value={review.review}
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
