const ReviewList = props => {
  const { id, comment, rate, user_id } = props.review;

  return (
    <div key={id} className="commentList">
      <div className="commentInfo">
        <img
          src="../../images/profileImg.jpg"
          className="profileImg"
          alt="profileImage"
        />
        <div className="commentStarId">
          <div className="commentStar">{rate}</div>
          <div className="commentId">{user_id}</div>
        </div>
      </div>
      <div className="comment">{comment}</div>
    </div>
  );
};

export default ReviewList;