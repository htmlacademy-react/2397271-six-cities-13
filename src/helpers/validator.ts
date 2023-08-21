import {ReviewFormType} from '../types/offer';
import {CommentErrors, CommentTextLength} from '../const';
import {toast} from 'react-toastify';

export const regexEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
export const regexPassword = new RegExp('(([a-zA-Z].*\\d)|(\\d.*[a-zA-Z]))');


export const validateReviewForm = ({comment, rating}:ReviewFormType) => {
  let isValid = true;

  if (comment.length > CommentTextLength.Max) {
    toast.error(CommentErrors.TooLongText, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    isValid = false;
  }
  if (comment.length < CommentTextLength.Min) {
    toast.error(CommentErrors.TooShortText, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    isValid = false;
  }
  if (rating === 0) {
    toast.error(CommentErrors.EmptyRating, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    isValid = false;
  }

  return isValid;
};
