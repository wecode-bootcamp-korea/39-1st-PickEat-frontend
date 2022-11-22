import React from 'react';

const CartLectureList = props => {
  const { id, title, price, image } = props.lecture;
  const { deleteBtn, checkItems, setCheckItems } = props;

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };

  return (
    <div className="cartLectureList" key={id}>
      <input
        className="cartCheckbox"
        type="checkbox"
        onChange={e => handleSingleCheck(e.target.checked, id)}
        checked={checkItems.includes(id)}
      />
      <img className="cartLectureImg" src={image} alt="lectureImg" />
      <div className="cartLectureInfo">
        <div className="cartLectureTitle">{title}</div>
        <span className="lectureInstructor">김보윤</span>
        <span className="lectureDuration">7일간 수강</span>
      </div>
      <div className="cartLecturePrice">
        <span>{Number(price).toLocaleString()}</span>원
        <button className="cartDeleteBtn" onClick={() => deleteBtn(id)}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default CartLectureList;
