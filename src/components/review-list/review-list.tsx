import React from 'react';
import ReviewItem from '../review-item/review-item';
import {ReviewType} from '../../types/offer';
import {MAX_REVIEW_AMOUNT} from '../../const';
import dayjs from 'dayjs';
import {selectReviewsData} from '../../store/reviews-data/selectors';
import {useAppSelector} from '../../hooks';


function ReviewList() {
  const reviews:ReviewType[] = useAppSelector(selectReviewsData);
  const sortedReviews = [...reviews]
    .sort((a, b) => dayjs(b.date).diff(a.date))
    .slice(0, MAX_REVIEW_AMOUNT);

  return (
    <ul className="reviews__list" data-testid='review-list-container'>
      {
        sortedReviews.map((review) => <ReviewItem comment={review} key={review.id}/>)
      }
    </ul>
  );
}

export default ReviewList;
