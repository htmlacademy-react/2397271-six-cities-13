import React from 'react';
import ReviewItem from '../review-item/review-item';
import {ReviewType} from '../../types/offer';
import {MAX_REVIEW_AMOUNT} from '../../const';

interface ReviewListProps {
  reviews: ReviewType[];
}

function ReviewList({reviews}:ReviewListProps) {
  const sortedByDate = [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <ul className="reviews__list">
      {
        sortedByDate
          .slice(0, MAX_REVIEW_AMOUNT)
          .map((review) => <ReviewItem comment={review} key={review.id}/>)
      }
    </ul>
  );
}

export default ReviewList;
