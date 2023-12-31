import {ReviewType} from '../../types/offer';
import {RATING_MULTIPLIER, ReviewDateView} from '../../const';
import dayjs from 'dayjs';

interface ReviewItemProps {
  comment: ReviewType;
}

function ReviewItem({comment}:ReviewItemProps):JSX.Element {
  return (
    <li className="reviews__item" data-testid='review-item-container'>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(comment.rating) * RATING_MULTIPLIER}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment.comment}</p>
        <time
          className="reviews__time"
          dateTime={dayjs(comment.date).format(ReviewDateView.System)}
        >{dayjs(comment.date).format(ReviewDateView.Displayed)}
        </time>

      </div>
    </li>
  );
}

export default ReviewItem;
