import {ReviewFormType} from '../types/offer';
import {CommentTextLength} from '../const';

export const REGEX_PASSWORD = new RegExp('(([a-zA-Z].*\\d)|(\\d.*[a-zA-Z]))');


export const validateReviewForm = ({comment, rating}:ReviewFormType) => {
  let isValid = true;

  if (comment.length > CommentTextLength.Max) {
    isValid = false;
  }
  if (comment.length < CommentTextLength.Min) {
    isValid = false;
  }
  if (rating === 0) {
    isValid = false;
  }

  return isValid;
};
