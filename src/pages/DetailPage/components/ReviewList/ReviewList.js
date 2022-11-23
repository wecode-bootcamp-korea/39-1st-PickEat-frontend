import { FaStar } from 'react-icons/fa';
import '../../components/ReviewList/ReviewList.scss';

const ReviewList = props => {
  const { id, comment, rate, user_id } = props.review;
  const { ARRAY } = props;

  return (
    <div key={id} className="commentList">
      <div className="commentInfo">
        <img
          src="../../images/profileImg.jpg"
          className="profileImg"
          alt="profileImage"
        />
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
          <div className="commentId">{user_id}</div>
        </div>
      </div>
      <div className="comment">{comment}</div>
    </div>
  );
};

export default ReviewList;
