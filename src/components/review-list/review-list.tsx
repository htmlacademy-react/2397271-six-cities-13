import React from 'react';
import ReviewItem from '../review-item/review-item';
import {CommentType} from '../../types/offer';

interface ReviewListProps {
  comments: CommentType[];
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
