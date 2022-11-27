import { FaStar } from 'react-icons/fa';
import '../DetailPage/ReviewList';
import './ReviewList.scss';

const ReviewList = ({ review, ARRAY }) => {
  const { content, rate, userName } = review;

  return (
    <div className="commentList">
      <div className="commentInfo">
        <div className="commentStarId">
          <div className="commentStar">
            {ARRAY.map((el, idx) => {
              return (
                el <= rate - 1 && (
                  <FaStar key={idx} size="20" className="yellowStar" />
                )
              );
            })}
          </div>
          <div className="commentId">{userName}</div>
        </div>
      </div>
      <div className="comment">{content}</div>
    </div>
  );
};

export default ReviewList;
