import React from 'react';
import './CartLectureList.scss';

const CartLectureList = props => {
  const { id, title, price, image, productId } = props.lecture;
  const { deleteBtn } = props;

  return (
    <div className="cartLectureList" key={id}>
      <input className="cartCheckbox" type="checkbox" defaultChecked={true} />
      <img className="cartLectureImg" src={image} alt="lectureImg" />
      <div className="cartLectureInfo">
        <div className="cartLectureTitle">{title}</div>
        <span className="lectureDuration">14일간 수강</span>
      </div>
      <div className="cartLecturePrice">
        <span className="lecturePrice">{Number(price).toLocaleString()}</span>원
        <button className="cartDeleteBtn" onClick={() => deleteBtn(productId)}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default CartLectureList;
