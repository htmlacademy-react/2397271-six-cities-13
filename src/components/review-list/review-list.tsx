import React from 'react';
import ReviewItem from '../review-item/review-item';
import {CommentProps} from '../../types/offer-props';

interface ReviewListProps {
  comments: CommentProps[];
}

function ReviewList({comments}:ReviewListProps) {
  return (
    <ul className="reviews__list">
      {
        comments.map((comment) => <ReviewItem comment={comment} key={comment.id}/>)
      }
    </ul>
  );
}

export default ReviewList;
