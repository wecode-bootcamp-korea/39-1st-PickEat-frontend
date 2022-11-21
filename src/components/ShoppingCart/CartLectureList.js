import React from 'react';

const CartLectureList = props => {
  const { id, title, price, duration, instructor, img } = props.lecture;
  const { deleteBtn } = props;

  return (
    <div className="cartLectureList" key={id}>
      <input className="cartCheckbox" type="checkbox" defaultChecked={true} />
      <img className="cartLectureImg" src={img} alt="lectureImg" />
      <div className="cartLectureInfo">
        <div className="cartLectureTitle">{title}</div>
        <span className="lectureInstructor">{instructor}</span>
        <span className="lectureDuration">{duration}</span>
      </div>
      <div className="cartLecturePrice">
        <span>{price.toLocaleString()}</span>원
        <button className="cartDeleteBtn" onClick={() => deleteBtn(id)}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default CartLectureList;
